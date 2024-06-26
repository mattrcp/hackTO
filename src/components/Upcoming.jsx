import React from "react";
import styles from "../app/style";
import Image from "next/image";
import { MjMouse, mattMouse, natMouse } from "../assets/img";
import Link from "next/link";

const Upcoming = () => {
  return (
    <div
      className={`${styles.padding} ${styles.margin} h-full bg-light-secondary rounded-[18px] w-auto relative  overflow-hidden mt-[56px]`}
    >
      <h2 className={`${styles.headerMd} mb-[24px]`}>Upcoming events</h2>
      <div className="flex flex-col gap-4">
        {upcoming.map((data, i) => (
          <Link href={data.link} target="_blank" key={i}>
            <div className="flex items-start justify-start gap-[16px] lg:gap-[32px]  lg:mb-[16px]  flex-wrap flex-grow ">
              <div className=" h-[239px] w-full sm:w-[383px]  sm:h-[279px]  mb-[16px] ">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="rounded-[18px] h-[239px] w-full sm:w-[383px] sm:h-[279px]   object-cover max-w-[455px] 2xl:max-w-[532px]"
                />
              </div>
              <div className="md:w-[500px] lg:w-[650px] xl:w-[750px] 2xl:w-[850px]  w-auto flex flex-col gap-[8px]">
                <h3 className={`${styles.headerXs}`}>{data.title}</h3>
                <p
                  className={`${styles.bodyMd} ${styles.bodySemi} text-[#5E5E5E]`}
                >
                  {data.date.date} {data.date.month} {data.date.year} at{" "}
                  {data.time}
                </p>
                <p
                  className={`${styles.bodyMd} ${styles.bodyLight} text-[#5E5E5E]`}
                >
                  {data.location.venue}, {data.location.city},{" "}
                  {data.location.state}, {data.location.country}
                </p>
                <p className={`${styles.bodyMd} ${styles.bodyBase} `}>
                  {data.description}
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
                {/* <div className="flex gap-[8px] mt-[16px]">
                  <div className="px-[16px] py-[8px] bg-accent-tag-pink rounded-[8px] text-body-sm">
                    {data.price}
                  </div>
                  <div className="px-[16px] py-[8px] bg-accent-tag-yellow rounded-[8px] text-body-sm">
                    {data.reward}
                  </div>
                </div> */}
              </div>
            </div>{" "}
          </Link>
        ))}
        <Image
          src={mattMouse}
          alt="mouse"
          className="absolute left-[50px] sm:right-[150px]  bottom-0 sm:bottom-[400px] hidden sm:block"
        />
        <Image
          src={natMouse}
          alt="mouse"
          className="absolute bottom-[10px] hidden lg:block"
        />
        <Image
          src={MjMouse}
          alt="mouse"
          className="absolute top-[50px] right-[300px]  hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Upcoming;
