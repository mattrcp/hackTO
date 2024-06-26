"use client";
import React, { useState } from "react";
import styles from "../app/style";

const Password = ({ onAuthenticate }) => {
  const [password, setPassword] = useState("");
  const localPassword = process.env.NEXT_PUBLIC_IMPORTANT_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localPassword === password) {
      onAuthenticate();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className={`${styles.headerLg} w-1/2 text-center h-auto`}>
        Oops, you found our hidden page, but we are sorry you have to have a
        password
      </h1>
      <form onSubmit={handleSubmit} className={`flex flex-col w-auto`}>
        <input
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Password;
