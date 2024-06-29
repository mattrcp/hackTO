"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FormEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({
    venue: "",
    city: "",
    state: "",
    country: "",
  });
  const [date, setDate] = useState({
    year: 2024,
    month: "",
    day: "",
  });
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [reward, setReward] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [industry, setIndustry] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !date.year || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    const eventDetails = {
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
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a new event");
      }
    } catch (err) {
      console.error("Error creating event:", err);
      // Handle error display or logging here
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Venue"
            value={location.venue}
            onChange={(e) =>
              setLocation({ ...location, venue: e.target.value })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="City"
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="State"
            value={location.state}
            onChange={(e) =>
              setLocation({ ...location, state: e.target.value })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Country"
            value={location.country}
            onChange={(e) =>
              setLocation({ ...location, country: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="number"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Year"
            value={date.year}
            onChange={(e) =>
              setDate({ ...date, year: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Month"
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Day"
            value={date.day}
            onChange={(e) => setDate({ ...date, day: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Link
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reward
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Organizer
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-6 text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEvent;
