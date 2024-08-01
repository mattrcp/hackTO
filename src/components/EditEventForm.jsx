"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditEventForm = ({
  id,
  title,
  description,
  venue,
  city,
  state,
  country,
  year,
  month,
  day,
  time,
  link,
  price,
  reward,
  organizer,
  industry,
}) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newLocation, setNewLocation] = useState({
    venue,
    city,
    state,
    country,
  });
  const [newDate, setNewDate] = useState({ year, month, day });
  const [newTime, setNewTime] = useState(time);
  const [newLink, setNewLink] = useState(link);
  const [newPrice, setNewPrice] = useState(price);
  const [newReward, setNewReward] = useState(reward);
  const [newOrganizer, setNewOrganizer] = useState(organizer);
  const [newIndustry, setNewIndustry] = useState(industry);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/event/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newTitle,
            newDescription,
            newVenue: newLocation.venue,
            newCity: newLocation.city,
            newState: newLocation.state,
            newCountry: newLocation.country,
            newYear: newDate.year,
            newMonth: newDate.month,
            newDay: newDate.day,
            newTime,
            newLink,
            newPrice,
            newReward,
            newOrganizer,
            newIndustry,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to submit: ${res.status} ${res.statusText}`);
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Error updating event: ", error);
    }
  };

  return (
    <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Description
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
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
            value={newLocation.venue}
            onChange={(e) =>
              setNewLocation({ ...newLocation, venue: e.target.value })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="City"
            value={newLocation.city}
            onChange={(e) =>
              setNewLocation({ ...newLocation, city: e.target.value })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="State"
            value={newLocation.state}
            onChange={(e) =>
              setNewLocation({ ...newLocation, state: e.target.value })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Country"
            value={newLocation.country}
            onChange={(e) =>
              setNewLocation({ ...newLocation, country: e.target.value })
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
            value={newDate.year}
            onChange={(e) =>
              setNewDate({ ...newDate, year: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Month"
            value={newDate.month}
            onChange={(e) => setNewDate({ ...newDate, month: e.target.value })}
          />
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Day"
            value={newDate.day}
            onChange={(e) => setNewDate({ ...newDate, day: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Link
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reward
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newReward}
            onChange={(e) => setNewReward(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Organizer
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newOrganizer}
            onChange={(e) => setNewOrganizer(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={newIndustry}
            onChange={(e) => setNewIndustry(e.target.value)}
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

export default EditEventForm;
