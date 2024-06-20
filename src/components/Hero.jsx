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
} from "../assets/img";

const Hero = () => {
  return (
    <div
      className={` bg-light-secondary rounded-[18px] ${styles.padding} flex flex-col items-start lg:justify-center relative gap-[16px] overflow-hidden h-auto  ${styles.margin} w-auto mt-[16px] `}
    >
      <div className="flex items-center  md:justify-center lg:justify-between  mt-[40px] lg:mt-[80px] z-10 mb-[16px] flex-wrap lg:flex-nowrap overflow-hidden w-full ">
        <div className="mb-[16px] md:mb-6 lg:mb-0">
          <h1 className={`${styles.headerXl} mb-[16px] w-auto`}>
            Where you can change <br /> the world with an{" "}
            <strong className="relative px-2 bg-accent-yellow">idea.</strong>
          </h1>
          <p
            className={`${styles.bodyMd} ${styles.bodyBase} mb-[40px] max-w-[800px]`}
          >
            <span className={`${styles.bodySemi}`}>
              Unleash your creativity, test your ideas, and gain invaluable
              experience.
            </span>{" "}
            Whoever you&apos;re a seasoned developer, a curious student, or
            someone passionate about technology, HackTO is the ultimate platform
            for exploration and growth.
          </p>
          <div>
            <a
              href="#event"
              className={`${styles.button} text-light-secondary px-[24px] py-[12px] bg-dark-primary rounded-[18px] flex items-center justify-between w-fit text-body-md font-body gap-4`}
            >
              <Image src={search} alt="search icon" /> Search for event
            </a>
          </div>
        </div>
        <div className="relative w-auto ">
          <Image src={imgHeader} alt="animation" className="w-auto" />
          <Image src={mouse} alt="mouse" className="absolute designer" />
          <Image src={devMouse} alt="mouse" className="absolute dev" />
        </div>
      </div>
      <div className="flex gap-[16px] w-full flex-wrap  justify-start sm:justify-between h-auto sm:h-[224px] z-10 relative flex-row sm:flex-col  ">
        <div className="relative  w-full sm:w-auto  h-[224px]">
          <Image
            src={productSchool1}
            alt=""
            className="rounded-[18px] object-cover  w-full h-full"
          />
        </div>
        <div className="relative w-full sm:w-auto   h-[224px]">
          <Image
            src={productSchool3}
            alt=""
            className="rounded-[18px] object-cover  w-full  h-full"
          />
        </div>
        <div className="relative  w-full sm:w-auto  h-[224px]">
          <Image
            src={productSchool2}
            alt=""
            className="rounded-[18px] object-cover  w-full h-full"
          />
        </div>
      </div>
      <Image
        src={gradient}
        alt="gradient"
        className="absolute z-1 rotate-[90deg] lg:rotate-0 h-auto sm:h-full w-full sm:w-[1300px] hidden sm:block"
      />
    </div>
  );
};

export default Hero;
