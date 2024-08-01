"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RemoveEvent = ({ id }) => {
  const router = useRouter();
  const removeEvent = async () => {
    let password = prompt("Please provide a password to remove the event");
    if (password === process.env.NEXT_PUBLIC_IMPORTANT_PASSWORD) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/event?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      alert("Wrong password");
    }
  };
  return (
    <div>
      <button className="text-red-600" onClick={removeEvent}>
        Remove
      </button>
    </div>
  );
};

export default RemoveEvent;
