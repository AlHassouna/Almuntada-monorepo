import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Vision from "../../sections/Vision";
import Impact from "../../sections/Impact";
import Goals from "../../sections/Goals";
import MissFix from "../../sections/MissFix";
import Founders from "../../sections/Founders";
import {useEffect, useState} from 'react';
import {HomeLogic} from "./homeLogic";

const HomePage = () => {
  // const [details, setDetails] = useState({})
  // const {onFetch} = HomeLogic()
  // const regex = /\(([^)]+)\)/;
  // useEffect(() => {
  //   const matches = regex.exec(window.navigator.userAgent);
  //   setDetails({
  //     pathname: window.location.pathname,
  //     userAgent: matches[1]
  //   })
  // }, [])
  // await onFetch(details)
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
