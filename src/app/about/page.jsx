import React from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../style";
import { bigGrid, gradient } from "../../assets/img";
import Nav from "../../components/navigation/Nav";

const page = () => {
  return (
    <div>
      <Nav />
      <Navigation />
      <main
        className={`  bg-light-secondary w-auto ${styles.padding} ${styles.margin} overflow-hidden rounded-[18px] flex flex-col align-middle relative h-auto mt-[16px]`}
      >
        <div className="flex flex-col items-center  justify-center w-full text-center mt-[80px] sm:mt-[171px]">
          <h1 className={`${styles.headerXl} mb-[16px]`}>
            Meet <strong className="px-2 bg-accent-yellow">Trio.TO</strong>
          </h1>
          <p className={` w-auto sm:w-[650px] ${styles.bodyMd}`}>
            TrioTO is a nonprofit website developed by a single developer
            committed to fostering more innovation in Toronto. We are building a
            community where everyone chases their goal and tests them with
            events, even if your ideas are on paper.
          </p>
        </div>
        <div className="flex flex-row justify-evenly flex-wrap  w-full mt-[80px] sm:mt-[151px] z-50 relative lg:h-[650px] gap-[32px] sm:gap-0">
          <div className="bg-accent-yellow shadow-[4px_4px_0_5px_#3e0065] rounded-[18px] flex flex-col justify-center items-center w-[330px] h-[330px] ">
            <div>
              <h2
                className={` mb-[16px] text-dark-primary font-body font-bold text-display-xs sm:text-display-sm w-[226px]`}
              >
                We value
              </h2>
              <ul className={` space-y-2 w-[226px]`}>
                <li className={`${styles.bodyBase} ${styles.bodyLarge}`}>
                  Exploring
                </li>
                <li className={`${styles.bodyBase} ${styles.bodyLarge}`}>
                  Inspiring
                </li>
                <li className={`${styles.bodyBase} ${styles.bodyLarge}`}>
                  Creativity
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-accent-blue shadow-[4px_4px_0_5px_#3e0065] rounded-[18px] flex flex-col justify-center items-center w-[330px] h-[330px] md:top-[150px] relative">
            <div>
              <h2
                className={` mb-[16px] text-dark-primary font-body font-bold text-display-xs sm:text-display-sm w-[226px]`}
              >
                Our goal
              </h2>
              <p className={`${styles.bodyBase}  ${styles.bodyMd} w-[226px]`}>
                Where everyone can access tech events in Toronto on one website.
              </p>
            </div>
          </div>
          <div className="bg-accent-tag-pink shadow-[4px_4px_0_5px_#3e0065] rounded-[18px] flex flex-col justify-center items-center w-[330px] h-[330px] relative md:top-[250px]">
            <div>
              <h2
                className={` mb-[16px] text-dark-primary font-body font-bold text-display-xs sm:text-display-sm w-[226px]`}
              >
                Our mission
              </h2>
              <p className={`${styles.bodyBase} ${styles.bodyMd} w-[226px]`}>
                To make your idea into a reality even your ideas is on the
                paper.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-200px] z-0 w-[1300px] h-full transform -translate-x-1/2 left-1/2 hidden sm:block">
          <Image src={bigGrid} alt="grid" className="w-full h-full"></Image>
        </div>
        {/* <Image
          src={gradient}
          alt="gradient"
          className="absolute z-1 rotate-[90deg] lg:rotate-0 h-auto sm:h-full left-0 sm:left-none top-0  sm:w-[1389px] hidden sm:block"
        /> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;
