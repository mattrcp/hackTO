"use client";

import React, { useState, useEffect } from "react";
import styles from "../../style";
import truncateText from "../../../utils/truncateText";
import EditEventForm from "../../../components/EditEventForm";
import RemoveEvent from "../../../components/RemoveEvent";
import Link from "next/link";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/event`, {
          cached: "no-store",
        });

        if (!res.ok) {
          throw new Error(
            `Failed to fetch events: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        if (!data.events) {
          throw new Error("No event found in response");
        }

        setEvents(data.events);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="w-full ">
      <h1 className={`${styles.headerLg} mb-2`}>Events</h1>
      {events.map((event, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-2 py-2 hover:bg-neutral-200"
        >
          <div className="flex-1">
            <h1>{truncateText(event.title, 25)}</h1>
            <p className={`${styles.bodySm} ${styles.bodySemi} text-[#5E5E5E]`}>
              {event.date.day} {event.date.month} {event.date.year}{" "}
              {event.time === "" ? "" : `at ${event.time}`}
            </p>
            <p
              className={`${styles.bodySm} ${styles.bodyLight} text-[#5E5E5E] mb-[4px]`}
            >
              {event.location.venue} {event.location.city}{" "}
              {event.location.state} {event.location.country}
            </p>
          </div>
          <div className="flex-1">
            <p className={`${styles.bodySm} ${styles.bodyBase} text-[#5E5E5E]`}>
              <span className={`${styles.bodySemi}`}>Industry:</span>{" "}
              {event.industry}
            </p>
            <p
              className={`${styles.bodySm} ${styles.bodyBase} text-[rgb(94,94,94)]`}
            >
              <span className={`${styles.bodySemi}`}>Organizer:</span>{" "}
              {event.organizer}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={event.link} target="_blank">
              Link
            </Link>
            <Link href={`/editEvent/${event._id}`}>Edit</Link>
            <RemoveEvent id={event._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
