"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditArticleForm = ({ id, title, description, link, author }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newLink, setNewLink] = useState(link);
  const [newAuthor, setNewAuthor] = useState(author);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/article/${id}`,
        {
          method: "PUT",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({ newTitle, newDescription, newLink }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return (
    <div className="w-full p-6 mx-auto mt-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Create a New Article</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Article Header</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Article Description</label>
          <textarea
            className="w-full h-32 px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Author</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Link</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
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

export default EditArticleForm;
