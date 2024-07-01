"use client";

import Links from "./links/Links";
import Toggle from "./toggle/Toggle";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
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
      className="fixed z-[999] bg-dark-primary flex flex-col align-middle justify-center top-0 w-screen h-full ease-in-out duration-200  sm:hidden"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <Links />
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
}

export default Nav;
