import React from "react";
import { BackgroundContext } from "../context/BackgroundContext";
import Footer from "./Footer";
import GradientCircle from "./GradientCircle";
import Navbar from "./Navbar";

const PageWrapper = ({ children }) => {
  return (
    <div className="container flex flex-col ">
      <BackgroundContext>
        <Navbar />
        <GradientCircle />
        <div className="page relative grow w-full 2xl:max-w-2xl 2xl:mx-auto">
          {children}
        </div>
      </BackgroundContext>
      <Footer />
    </div>
  );
};

export default PageWrapper;
