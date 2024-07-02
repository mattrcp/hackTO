"use client";

import Links from "./links/Links";
import Toggle from "./toggle/Toggle";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`fixed z-[999] ${
        open ? "bg-dark-primary h-full" : "null"
      }  flex flex-col align-middle top-0 justify-center  w-screen  ease-in-out duration-200 sm:hidden`}
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <Links />
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
}

export default Nav;
