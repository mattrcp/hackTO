import React from "react";
import styles from "../app/style";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../assets/img";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={` bg-light-secondary ${styles.margin} rounded-[18px] my-[16px] ${styles.padding} text-center mt-[40px] h-auto`}
    >
      <div
        className={`  flex flex-col sm:flex-row justify-between relative  w-auto sm:items-center gap-[16px]`}
      >
        <div>
          <a href="/" className="w-auto h-auto">
            <Image src={logo} alt="HackTO Logo" className="h-[50px] w-[50px]" />
          </a>
          <p
            className={`${styles.bodySm} w-auto  sm:w-[550px]  mt-[16px] text-start`}
          >
            TrioTO is a non-profit website developed by a single developer who
            is committed to cultivating more innovation in Toronto. If you would
            like us to promote your website or any events related to hackathons,
            tech, or networking, we would be happy to have a chat with you. 😊
          </p>
          <p
            className={`${styles.bodySm} ${styles.bodySemi} w-[380px] mt-[16px] text-start`}
          >
            trioto.team@gmail.com
          </p>
        </div>
        <div>
          <div className={`mb-4 sm:mb-8`}>
            <nav className=" flex items-start gap-[8px]  flex-col">
              <Link href="/" className={` text-body-sm hover:font-bold `}>
                Home
              </Link>
              <Link href="/about" className={` text-body-sm hover:font-bold `}>
                About
              </Link>
              {/* <Link href="/contact" className={` text-body-sm hover:font-bold `}>
              Contact
            </Link> */}
            </nav>{" "}
          </div>
          <div>
            <Link
              href="https://www.instagram.com/trioto.team/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              <FaInstagram className="w-[30px] h-auto" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-body-xs mt-[24px] text-[#7B7B7B]">
        © 2024 for Trio.TO
      </p>
    </footer>
  );
};

export default Footer;
