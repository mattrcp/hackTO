// components/SkeletonEvent.jsx
import React from "react";
import styles from "./SkeletonEvent.module.css";

const SkeletonEvent = () => (
  <div
    className={`${styles.event} flex flex-col pb-2 mb-4 duration-300 ease-in-out border-b-[1px]`}
  >
    <div className="flex flex-col gap-[4px] p-[8px]">
      <div
        className={`${styles.skeletonText} text-display-xxs sm:text-display-xs font-body text-dark-primary font-base`}
      ></div>
      <div
        className={`${styles.skeletonText} ${styles.skeletonTextSm} text-body-sm`}
      ></div>
      <div
        className={`${styles.skeletonText} ${styles.skeletonTextSm} mb-[4px]`}
      ></div>
      <div className={`${styles.skeletonText} ${styles.skeletonTextSm}`}></div>
      <div className={`${styles.skeletonText} ${styles.skeletonTextSm}`}></div>
      <div className="flex gap-[8px] mt-[16px]">
        <div className={`${styles.skeletonTag} bg-accent-tag-pink`}></div>
        <div className={`${styles.skeletonTag} bg-accent-tag-yellow`}></div>
      </div>
    </div>
  </div>
);

export default SkeletonEvent;
