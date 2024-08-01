import React from "react";
import styles from "../../style";
import EditArticleForm from "../../../components/EditArticleForm";

const getArticleById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/article/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await getArticleById(id);

  if (!data || !data.article) {
    return <div>Error loading article.</div>;
  }
  const { title, description, link, author } = data.article;

  return (
    <div
      className={`bg-light-secondary rounded-[18px] ${styles.padding} flex flex-row items-start lg:justify-start relative gap-[16px] overflow-hidden h-screen ${styles.margin} w-auto mt-[16px]`}
    >
      <EditArticleForm
        id={id}
        title={title}
        description={description}
        author={author}
        link={link}
      />
    </div>
  );
};

export default page;
