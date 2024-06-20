import React from "react";
import Image from "next/image";
import {
  atlassian,
  gemini,
  google,
  openai,
  ycombinator,
  youtube,
} from "../assets/img";
import styles from "../app/style";

const images = [
  {
    img: google,
    alt: "google",
  },
  {
    img: atlassian,
    alt: "atlassian",
  },
  {
    img: ycombinator,
    alt: "ycombinator",
  },
  {
    img: youtube,
    alt: "youtube",
  },
  {
    img: gemini,
    alt: "gemini",
  },
  {
    img: openai,
    alt: "openai",
  },
];

const Sponsors = () => {
  return (
    <div
      className={`flex items-center justify-between w-auto px-[50px] my-[56px] flex-wrap gap-5 sm:gap-0 mx-0 ${styles.margin} overflow-hidden`}
    >
      {images.map((image, i) => (
        <Image src={image.img} alt={image.alt} className="h-[100px]" key={i} />
      ))}
    </div>
  );
};

export default Sponsors;
