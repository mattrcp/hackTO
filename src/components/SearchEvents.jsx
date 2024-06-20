"use client";

import React, { useState } from "react";
import styles from "../app/style";
import Image from "next/image";
import { search } from "../assets/img";
import { events } from "../app/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SearchEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Filter events based on the search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index of the first and last event on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Handle pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const variants = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div id="event" className={`mt-[96px] w-auto  ${styles.margin}`}>
      <div
        className={`flex mx-auto md:ml-[50px] gap-[8px] sm:gap-[16px] px-[16px] sm:px-0 items-center justify-center sm:justify-start w-auto relative `}
      >
        <div className="card bg-accent-pink text-light-secondary pt-[24px] pb-[16px] px-[8px] sm:px-[16px] rounded-t-[18px] w-[180px] text-body-sm sm:text-body-md font-body tracking-widest sm:absolute  left-[200px] z-0 sm:top-[-28px] sm:hover:top-[-80px] ease-in-out duration-300">
          Be <br /> inspired
        </div>
        <div className="card bg-accent-blue text-light-secondary pt-[24px] pb-[16px] px-[8px] sm:px-[16px] rounded-t-[18px] w-[180px] text-body-sm sm:text-body-md font-body tracking-widest sm:absolute  z-0 sm:top-[-28px] sm:hover:top-[-80px] ease-in-out duration-300">
          Be <br /> creative
        </div>
        <div className="card bg-accent-yellow text-light-secondary pt-[24px] pb-[16px] px-[8px] sm:px-[16px] rounded-t-[18px] w-[180px] text-body-sm sm:text-body-md font-body tracking-widest sm:absolute  left-[400px] z-0 sm:top-[-28px] sm:hover:top-[-80px] ease-in-out duration-300">
          Be <br /> passionate
        </div>
      </div>
      <div
        className={`${styles.padding} h-auto bg-light-secondary rounded-[18px] z-20 relative`}
      >
        <div>
          <div className="flex gap-[16px] justify-between mb-[24px]">
            <input
              type="text"
              placeholder="Search for Hackathon"
              className="w-full rounded-[18px] px-[24px] py-[8px] border"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to the first page on search
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[16px] overflow-hidden">
            <AnimatePresence mode="wait">
              {currentEvents.map((data) => (
                <motion.div
                  key={data.id}
                  // className="flex flex-col mb-5  rounded-t-[18px] rounded-b-[14px]  hover:shadow-[4px_4px_0_5px_#3e0065] ease-in-out duration-300 "
                  className="flex flex-col pb-2 mb-4 duration-300 ease-in-out border-b-[1px] "
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link href={data.link}>
                    <div className="relative h-[239px] w-full mb-[16px]">
                      <Image
                        src={data.image}
                        alt={data.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[18px] "
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] p-[8px]">
                      <h3
                        className={`text-display-xxs sm:text-display-xs font-body text-dark-primary font-base`}
                      >
                        {data.title}
                      </h3>
                      <p
                        className={`${styles.bodySm} ${styles.bodySemi} text-[#5E5E5E]`}
                      >
                        {data.date.date} {data.date.month} {data.date.year} at{" "}
                        {data.time}
                      </p>
                      <p
                        className={`${styles.bodySm} ${styles.bodyLight} text-[#5E5E5E] mb-[4px]`}
                      >
                        {data.location.venue}, {data.location.city},{" "}
                        {data.location.state}, {data.location.country}
                      </p>
                      <p
                        className={`${styles.bodySm} ${styles.bodyBase} text-[#5E5E5E]`}
                      >
                        <span className={`${styles.bodySemi}`}>Industry:</span>{" "}
                        {data.industry}
                      </p>
                      <p
                        className={`${styles.bodySm} ${styles.bodyBase} text-[#5E5E5E]`}
                      >
                        <span className={`${styles.bodySemi}`}>Organizer:</span>{" "}
                        {data.organizer}
                      </p>
                      <div className="flex gap-[8px] mt-[16px]">
                        <div className="px-[16px] py-[8px] bg-accent-tag-pink rounded-[8px] text-body-sm">
                          {data.price}
                        </div>
                        <div className="px-[16px] py-[8px] bg-accent-tag-yellow rounded-[8px] text-body-sm">
                          {data.reward}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredEvents.length > eventsPerPage && (
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-[24px] py-[8px] rounded-[8px] ${
                    currentPage === index + 1
                      ? "bg-dark-primary text-light-secondary"
                      : "bg-[#ECECEC] text-dark-primary"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;