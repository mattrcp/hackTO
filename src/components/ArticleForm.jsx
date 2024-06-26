"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title && !description && !author && !link) {
      alert("give it a value");
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/article`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description, author, link }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a new article");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Create a New Article</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Article Header</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Article Description</label>
          <textarea
            className="w-full h-32 px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Author</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Link</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
