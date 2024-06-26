"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/style";
import Link from "next/link";

const getArticle = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/article`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }
    return res.json();
  } catch (err) {
    console.error("Error loading article: ", err);
    return null;
  }
};

const PickArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleResult = await getArticle();

      if (articleResult && articleResult.article) {
        setArticles(articleResult.article);
      } else {
        setArticles([]);
      }

      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (articles.length === 0) {
    return (
      <div
        className={`${styles.padding} ${styles.margin} text-center ${styles.bodyLarge} h-full bg-light-secondary rounded-[18px] w-auto relative overflow-hidden mt-[56px]`}
      >
        Sorry we are looking for a article. 😥
      </div>
    );
  }

  return (
    <div
      className={`${styles.padding} ${styles.margin} h-full bg-light-secondary rounded-[18px] w-auto relative overflow-hidden mt-[56px]`}
    >
      <h2 className={`${styles.headerMd} mb-[24px]`}>
        Our weekly pick articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] overflow-hidden">
        {articles.map((data, i) => (
          <div
            className="flex flex-col pb-2 mb-4 duration-300 ease-in-out border-b-[1px]"
            key={i}
          >
            <Link href={data.link} target="_blank">
              <div className="flex flex-col gap-[4px] p-[8px]">
                <h3
                  className={`text-display-xxs sm:text-display-xs font-body text-dark-primary font-base mb-4`}
                >
                  {data.title}
                </h3>
                <p
                  className={`${styles.bodyMd} ${styles.bodyBase} text-primary-dark mb-4`}
                >
                  {data.description}
                </p>
                <p
                  className={`${styles.bodyMd} ${styles.bodyBase} text-primary-dark mb-[4px]`}
                >
                  {data.author}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickArticle;
