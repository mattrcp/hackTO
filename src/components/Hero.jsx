import React from "react";
import Image from "next/image";
import styles from "../app/style";

import "./animation.css";
import {
  imgHeader,
  productSchool1,
  productSchool2,
  productSchool3,
  search,
  mouse,
  devMouse,
  gradient,
  upEvent1,
  upEvent2,
  upEvent3,
} from "../assets/img";

const Hero = () => {
  return (
    <div
      className={` bg-light-secondary rounded-[18px] ${styles.padding} flex flex-col items-start lg:justify-center relative gap-[16px] overflow-hidden h-auto  ${styles.margin} w-auto mt-[16px] `}
    >
      <div className="flex items-center sm:items-start md:justify-center lg:justify-start  mt-[40px] lg:mt-[80px] z-10 mb-[16px] flex-wrap lg:flex-nowrap overflow-hidden w-full ">
        <div className="mb-[16px] md:mb-6 lg:mb-0 w-auto xl:w-[681px] mr-0 xl:mr-40">
          <p className={`${styles.bodyMd} text-dark-primary mb-4 mt-4`}>
            Trio.TO is a community
          </p>
          <h1 className={`${styles.headerXl}  w-auto mb-8`}>
            <span>
              {" "}
              Where you can change <br className="hidden sm:block" /> the world
              with an
            </span>{" "}
            <span className="relative px-2 bg-accent-yellow">idea.</span>
          </h1>
          <p
            className={`${styles.bodyMd} ${styles.bodyBase} mb-[40px] max-w-[800px] `}
          >
            If you are a{" "}
            <span className={`${styles.bodySemi}`}>
              future designer, developer, or entrepreneur
            </span>{" "}
            in Toronto, who wants to turn your ideas into reality. Trio.TO is a
            tech community where we help you find the events that help you grow
            in your career path.
          </p>
          <div>
            <a
              href="#event"
              className={`${styles.button} text-light-secondary px-[24px] py-[12px] bg-dark-primary rounded-[18px] flex items-center justify-between w-fit text-body-md font-body gap-4`}
            >
              <Image src={search} alt="search icon" /> Search event in Toronto
            </a>
          </div>
        </div>
        <div className="relative w-auto ">
          <Image src={imgHeader} alt="animation" className="w-full" />
          <Image src={mouse} alt="mouse" className="absolute designer" />
          <Image src={devMouse} alt="mouse" className="absolute dev" />
        </div>
      </div>
      <div className="flex gap-[16px] w-full flex-wrap  justify-start sm:justify-between h-auto sm:h-[224px] z-10 relative flex-row sm:flex-col  ">
        <div className="relative  w-full sm:w-auto  h-[224px]">
          <Image
            src={upEvent1}
            alt="An event where people sit looking at the presentation."
            className="rounded-[18px] object-cover  w-full h-full"
          />
        </div>
        <div className="relative w-full sm:w-auto   h-[224px]">
          <Image
            src={upEvent2}
            alt="People are taking note of the event."
            className="rounded-[18px] object-cover  w-full  h-full"
          />
        </div>
        <div className="relative  w-full sm:w-auto  h-[224px]">
          <Image
            src={upEvent3}
            alt="People looking at the presentation."
            className="rounded-[18px] object-cover  w-full h-full"
          />
        </div>
      </div>
      <Image
        src={gradient}
        alt="gradient"
        className="absolute z-1 rotate-[90deg] sm:rotate-0 h-auto sm:h-full w-full sm:w-[1300px] top-0 sm:top-none hidden sm:block"
      />
    </div>
  );
};

export default Hero;
