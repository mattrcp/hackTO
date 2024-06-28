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
      className={` fixed top-[16px] w-full px-[18px] xl:px-0 z-50 left-1/2 transform -translate-x-1/2  mx-auto   2xl:m-auto xl:max-w-[1465px] 2xl:max-w-[1589px] overflow-hidden  hidden sm:block`}
    >
      <div
        className={`${styles.navStyle} ${
          scrolled
            ? "backdrop-filter backdrop-blur-lg bg-light-secondary bg-opacity-90"
            : "bg-inherit"
        } w-full `}
      >
        <a href="/" className="h-[50px] w-auto">
          <Image src={logo} alt="TrioTO Logo" className="w-full h-full" />
        </a>
        <nav className=" flex items-center gap-[24px] sm:gap-[32px] ">
          <Link href="/" className={`${styles.navText}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.navText}`}>
            About
          </Link>
          {/* <Link href="/contact" className={`${styles.navText}`}>
            Contact
          </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
