import React from "react";
import useBackground from "../context/BackgroundContext";

const GradientCircle = () => {
  const { background } = useBackground;
  return (
    <div>
      <div className="fixed rounded-full z-[1] left-0 top-0 w-screen h-screen bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
      <div
        style={!background ? { opacity: "1", zIndex: "5" } : undefined}
      ></div>
    </div>
  );
};

export default GradientCircle;
