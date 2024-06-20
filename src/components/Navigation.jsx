"use client";

import React, { useState, useEffect } from "react";
import styles from "../app/style";
import Link from "next/link";
import Image from "next/image";
import Links from "./navigation/links/Links";

import { logo } from "../assets/img";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed top-[16px] w-full px-[18px] xl:px-0    z-50 left-1/2 transform -translate-x-1/2  xl:mx-auto   2xl:m-auto  max-w-[1389px] overflow-hidden  hidden sm:block`}
    >
      <div
        className={`${styles.navStyle} ${
          scrolled
            ? "backdrop-filter backdrop-blur-lg bg-light-secondary bg-opacity-90"
            : "bg-inherit"
        } w-full `}
      >
        <nav className=" flex items-center gap-[24px] sm:gap-[32px] ">
          <Link href="/" className={`${styles.navText}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.navText}`}>
            About
          </Link>
          <Link href="/contact" className={`${styles.navText}`}>
            Contact
          </Link>
        </nav>
        <a href="/">
          <Image src={logo} alt="HackTO Logo" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
