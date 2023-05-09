import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Vision from "../../sections/Vision";
import Impact from "../../sections/Impact";
import Goals from "../../sections/Goals";
import MissFix from "../../sections/MissFix";
import Founders from "../../sections/Founders";

const HomePage = () => {
  return (
    <div className="overflow-hidden pt-[5vh]">
      <Hero/>
      <About/>
      <div className="relative">
        <Vision/>
        <Goals/>
        <Impact/>
        <MissFix/>
        <Founders/>
      </div>

    </div>
  );
};

export default HomePage;
