import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { contact, gradient } from "../../assets/img";
import styles from "../style";
import Nav from "../components/navigaiton/Nav";

const page = () => {
  return (
    <div>
      <Nav />
      <Navigation />
      <main
        className={`  bg-light-secondary w-auto ${styles.padding} ${styles.margin} overflow-hidden rounded-[18px]   h-auto mt-[16px]`}
      >
        <div className="flex flex-row items-center sm:justify-between mt-[68px] sm:mt-[168px] mb-[16px] sm:mb-[132px] flex-wrap gap-[32px] sm:gap-0">
          <div className="w-full sm:w-[50%] h-fit">
            <h1 className={`${styles.headerXl} mb-[24px] `}>
              Get in{" "}
              <strong className="relative px-2 bg-accent-yellow">touch</strong>{" "}
            </h1>
            <form
              method="post"
              action="mailto:ratchapon.ngam@gmail.com"
              enctype="text/plain"
              className="flex flex-col w-auto sm:w-auto"
            >
              <label htmlFor="email" className={`${styles.bodyMd} mb-[8px]`}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`rounded-[8px] bg-accent-tag-blue py-[11px] px-[24px] w-full ${styles.bodyMd} mb-[16px] `}
                placeholder="hackto@example.com"
              />
              <label
                htmlFor="description"
                className={`${styles.bodyMd} mb-[8px]`}
              >
                Tell us more about your inquiry
              </label>
              <textarea
                id="description"
                name="description"
                className={`rounded-[8px] bg-accent-tag-blue py-[11px] px-[24px] w-full ${styles.bodyMd} mb-[16px] h-[215px] `}
                placeholder="Enter your message"
              ></textarea>
              <button
                type="submit"
                value="send"
                className={`${styles.button} text-light-secondary px-[24px] py-[12px] bg-dark-primary rounded-[18px] flex items-center justify-between w-fit`}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-[500px] sm:h-[500px]">
            <Image
              src={contact}
              alt="contact"
              objectFit="cover"
              className="relative w-full h-auto"
            />
          </div>
        </div>
        <Image
          src={gradient}
          alt="gradient"
          className="absolute z-1 rotate-[90deg] lg:rotate-0 h-auto sm:h-full left-0 top-0  sm:w-[1389px] hidden sm:block"
        />
      </main>
      <Footer />
    </div>
  );
};

export default page;
