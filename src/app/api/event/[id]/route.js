import { connectEventDB } from "../../../../libs/server";
import Event from "../../../../models/event";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newVenue: venue,
    newCity: city,
    newState: state,
    newCountry: country,
    newYear: year,
    newMonth: month,
    newDay: day,
    newTime: time,
    newLink: link,
    newPrice: price,
    newReward: reward,
    newOrganizer: organizer,
    newIndustry: industry,
  } = await req.json();

  await connectEventDB();

  const updateData = {
    title,
    description,
    location: {
      venue,
      city,
      state,
      country,
    },
    date: {
      year,
      month,
      day,
    },
    time,
    link,
    price,
    reward,
    organizer,
    industry,
  };

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedEvent) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Event updated successfully", event: updatedEvent },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectEventDB();

  try {
    if (!ObjectId.isValid(id)) {
      console.error("Invalid ID format:", id);
      return NextResponse.json(
        { message: "Invalid ID format" },
        { status: 400 }
      );
    }

    console.log("Searching for event with ID:", id);
    const event = await Event.findById(id);
    if (!event) {
      console.error("Event not found:", id);
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    console.log("Event found:", event);
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
