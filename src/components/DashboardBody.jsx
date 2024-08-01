import React from "react";
import Articles from "../app/dashboard/articles/page";
import Events from "../app/dashboard/events/page";

const DashboardBody = () => {
  return (
    <div className="w-full">
      <Events />
      <Articles />
    </div>
  );
};

export default DashboardBody;
