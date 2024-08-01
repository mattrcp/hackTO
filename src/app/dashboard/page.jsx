import React from "react";
import styles from "../style";
import Link from "next/link";
import DashboardBody from "../../components/DashboardBody";

const page = () => {
  return (
    <div
      className={`bg-light-secondary rounded-[18px] ${styles.padding} flex flex-col items-start lg:justify-start relative gap-[16px] overflow-hidden h-full ${styles.margin} w-auto mt-[16px] gap-8`}
    >
      <div className="flex flex-row items-center justify-end gap-4">
        <Link
          href="/postArticle"
          className="px-4 py-2 text-center text-white bg-green-500 rounded-full"
        >
          Post Article
        </Link>
        <Link
          href="/postEvent"
          className="px-4 py-2 text-center text-white bg-green-500 rounded-full"
        >
          Post Event
        </Link>
      </div>
      <div className="w-full">
        <DashboardBody />
      </div>
    </div>
  );
};

export default page;
