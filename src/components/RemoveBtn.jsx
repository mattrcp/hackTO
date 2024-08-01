"use client";

import React from "react";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeArticle = async () => {
    let password = prompt("Please provide a password to remove the article.");
    if (password === process.env.NEXT_PUBLIC_IMPORTANT_PASSWORD) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/article?id=${id}`,
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
      <button onClick={removeArticle} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
