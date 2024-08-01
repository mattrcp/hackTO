"use client";

import React, { useEffect, useState } from "react";
import truncateText from "../../../utils/truncateText";
import Link from "next/link";
import styles from "../../style";
import RemoveBtn from "../../../components/RemoveBtn";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // Added state to handle errors

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/article`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(
            `Failed to fetch articles: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();

        if (!data.articles) {
          throw new Error("No articles found in response");
        }

        setArticles(data.articles);
      } catch (error) {
        console.error("Error loading articles:", error);
        setError(error.message); // Set the error state
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="w-full">
      <h1 className={`${styles.headerLg} mb-2`}>Articles</h1>
      {error ? ( // Display error message if any
        <div className="text-red-500">
          <p>Error loading articles: {error}</p>
        </div>
      ) : (
        articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-2 py-2 hover:bg-neutral-200"
          >
            <h1 className="w-1/3">{truncateText(article.title, 25)}</h1>
            <p className="w-2/3">{truncateText(article.description, 50)}</p>
            <div className="flex justify-end gap-4">
              <Link href={article.link} target="_blank">
                Link
              </Link>
              <Link href={`/editArticle/${article._id}`}>Edit</Link>
              <RemoveBtn id={article._id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;
