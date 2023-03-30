import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import { Goals } from "../../sections/Goals";
import Impact from "../../sections/Impact";

const HomePage = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <div className="relative">
        <Goals />
        <Impact />
      </div>

    </div>
  );
};

export default HomePage;
