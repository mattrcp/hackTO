// components/SkeletonArticle.js
import React from "react";
import styles from "./SkeletonArticle.module.css";

const SkeletonArticle = () => (
  <div
    className={`${styles.article} flex flex-col pb-2 mb-4 duration-300 ease-in-out border-b-[1px]`}
  >
    <div className="flex flex-col gap-[4px] p-[8px]">
      <div className={`${styles.skeletonBlock} ${styles.title}`}></div>
      <div className={`${styles.skeletonBlock} ${styles.description}`}></div>
      <div className={`${styles.skeletonBlock} ${styles.credit}`}></div>
      <div className={`${styles.skeletonBlock} ${styles.link}`}></div>
    </div>
  </div>
);

export default SkeletonArticle;
