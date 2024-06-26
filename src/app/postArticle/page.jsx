"use client";
import React, { useState } from "react";
import ArticleForm from "../../components/ArticleForm";
import Password from "../../components/Password";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <ArticleForm />
      ) : (
        <Password onAuthenticate={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default Page;
