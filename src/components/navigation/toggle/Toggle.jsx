import { motion } from "framer-motion";

function Toggle({ setOpen }) {
  return (
    <button
      className="absolute w-[50px] h-[50px] rounded-full top-[15px] left-[15px] border-none cursor-pointer z-9999 bg-dark-primary"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="#FFBD12"
            strokeLinecap="round"
            variants={{
              open: { d: "M 3 16.5 L 17 2.5" },
              closed: { d: "M 2 2.5 L 20 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#FFBD12"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#FFBD12"
            strokeLinecap="round"
            variants={{
              open: { d: "M 3 2.5 L 17 16.346" },
              closed: { d: "M 2 16.346 L 20 16.346" },
            }}
          />
        </svg>
      </div>
    </button>
  );
}

export default Toggle;
