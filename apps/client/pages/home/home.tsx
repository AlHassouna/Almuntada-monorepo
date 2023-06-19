import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Vision from "../../sections/Vision";
import Impact from "../../sections/Impact";
import Goals from "../../sections/Goals";
import MissFix from "../../sections/MissFix";
import Founders from "../../sections/Founders";
import Head from "next/head";

const HomePage = () => {
  return (
    <div className="overflow-hidden ">
      <Head>
        <meta property='og:image'
              content='https://res.cloudinary.com/dieieuuby/image/upload/v1687169761/FinalLogo_jwfwun.png'/>
      </Head>
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
