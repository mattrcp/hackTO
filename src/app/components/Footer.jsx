import React from "react";
import styles from "../style";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../assets/img";

const Footer = () => {
  return (
    <footer
      className={` bg-light-secondary ${styles.margin} rounded-[18px] my-[16px] ${styles.padding} text-center `}
    >
      <div
        className={`  flex flex-col sm:flex-row justify-between relative  w-auto sm:items-center gap-[16px]`}
      >
        <div>
          <a href="/">
            <Image src={logo} alt="HackTO Logo" />
          </a>
          <p className={`${styles.bodySm} w-[380px] mt-[8px] text-start`}>
            Commodo et orci praesent vulputate commodo gravida quis rutrum. Et
            in mattis sit rhoncus pulvinar nunc ultrices.
          </p>
          <p
            className={`${styles.bodySm} ${styles.bodySemi} w-[380px] mt-[8px] text-start`}
          >
            sale@hackto.com
          </p>
        </div>
        <div className={``}>
          <nav className=" flex items-start  gap-[8px]  flex-col">
            <Link href="/" className={` text-body-sm hover:font-bold `}>
              Home
            </Link>
            <Link href="/about" className={` text-body-sm hover:font-bold `}>
              About
            </Link>
            <Link href="/contact" className={` text-body-sm hover:font-bold `}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <p className="text-body-xs mt-[24px] text-[#7B7B7B]">
        @2024 Copy right for HackTO
      </p>
    </footer>
  );
};

export default Footer;
