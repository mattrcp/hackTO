"use client";
import { useState } from "react";
import React from "react";
import FormEvent from "../../components/FormEvent";
import Password from "../../components/Password";

const page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <FormEvent />
      ) : (
        <Password onAuthenticate={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default page;
