import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    title: String,
    description: String,
    location: {
      venue: String,
      city: String,
      state: String,
      country: String,
    },
    date: {
      year: Number,
      month: String,
      day: String,
    },
    time: String,
    link: String,
    price: String,
    reward: String,
    organizer: String,
    industry: String,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
