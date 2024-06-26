import { connectEventDB } from "../../../libs/server";
import Event from "../../../models/event";
import { NextResponse } from "next/server";

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
    return NextResponse.json(
      { message: "Event created successfully", event: newEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
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

    console.log("Fetched events:", events);

    // Respond with the fetched events
    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
