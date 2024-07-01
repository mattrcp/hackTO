import { connectEventDB } from "../../../libs/server";
import Event from "../../../models/event";
import { NextResponse } from "next/server";

const setCORSHeaders = (response) => {
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://www.trioto.club"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
};

export async function POST(req) {
  try {
    const {
      title,
      description,
      location,
      date,
      time,
      link,
      price,
      reward,
      organizer,
      industry,
    } = await req.json();

    // Connect to Event MongoDB
    const eventDB = await connectEventDB();

    // Ensure the Event model uses the correct connection
    const EventModel = eventDB.model("Event", Event.schema);

    // Create the event
    const newEvent = await EventModel.create({
      title,
      description,
      location,
      date,
      time,
      link,
      price,
      reward,
      organizer,
      industry,
    });

    // Respond with success message
    const response = NextResponse.json(
      { message: "Event created successfully", event: newEvent },
      { status: 201 }
    );
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error creating event:", error);
    const response = NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
    return setCORSHeaders(response);
  }
}

export async function GET() {
  try {
    // Connect to Event MongoDB
    const eventDB = await connectEventDB();

    // Ensure the Event model uses the correct connection
    const EventModel = eventDB.model("Event", Event.schema);

    // Fetch all events
    const events = await EventModel.find();

    // console.log("Fetched events:", events);

    // Respond with the fetched events
    const response = NextResponse.json({ events });
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error fetching events:", error);
    const response = NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
    return setCORSHeaders(response);
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  return setCORSHeaders(response);
}
