import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../assets/img";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  return (
    <motion.div
      className="absolute top-0 left-[50px] w-full h-full flex flex-col items-start justify-start py-[100px]"
      variants={variants}
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-between w-full h-[100%]"
      >
        <nav className=" flex items-start flex-col gap-[24px] sm:gap-[32px] ">
          <Link
            href="/"
            className={`font-body font-normal text-light-secondary text-body-lg hover:font-bold ease-in-out duration-300`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-body font-normal text-light-secondary text-body-lg hover:font-bold ease-in-out duration-300`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-body font-normal text-light-secondary text-body-lg hover:font-bold ease-in-out duration-300`}
          >
            Contact
          </Link>
        </nav>
        <a href="/">
          <Image src={logo} alt="HackTO Logo" />
          {/* BizDevDesign */}
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Links;