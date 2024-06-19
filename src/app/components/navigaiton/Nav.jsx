"use client";

import Links from "./links/Links";
import Toggle from "./toggle/Toggle";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(100vh at 50% 50%)",
    transition: {
      duration: 1,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      duration: 0.3,
    },
  },
};

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed z-[999] bg-dark-primary flex flex-col align-middle justify-center top-0 w-full h-full ease-in-out duration-200  sm:hidden"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <Links />
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
}

export default Nav;
