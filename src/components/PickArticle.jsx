"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/style";
import Link from "next/link";
import SkeletonArticle from "../components/skeleton/SkeletonArticle";

const PickArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <div
        className={`${styles.padding} ${styles.margin} text-center ${styles.bodyLarge}`}
      >
        Error loading articles. Please try again later.
      </div>
    );
  }

  return (
    <div
      className={`${styles.padding} ${styles.margin} h-full bg-light-secondary rounded-[18px] w-auto relative overflow-hidden mt-[40px] sm:mt-[56px]`}
    >
      <h2 className={`${styles.headerMd} mb-[24px]`}>
        🗞️ Our weekly pick articles
      </h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-3 gap-[16px] overflow-hidden`}
      >
        {loading ? (
          <SkeletonArticle />
        ) : (
          articles.map((article, index) => (
            <div
              className="flex flex-col pb-2 mb-4 duration-300 ease-in-out border-b-[1px]"
              key={index}
            >
              <div className="flex flex-col gap-[4px] p-[8px]">
                <h3
                  className={`${styles.bodyLarge} ${styles.bodySemi} text-dark-primary mb-2`}
                >
                  {article.title}
                </h3>
                <p
                  className={`${styles.bodyMd} ${styles.bodyBase} text-primary-dark mb-2`}
                >
                  {article.description}
                </p>
                <p
                  className={`${styles.bodySm} ${styles.bodyBase} text-primary-dark mb-[4px]`}
                >
                  Credit: {article.author}
                </p>
                <Link
                  href={article.link}
                  className={`${styles.bodySm} ${styles.bodySemi}`}
                  target="_blank"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PickArticle;
