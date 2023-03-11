import React from "react";
import { Discover } from "./Home/Discover";
import { Feature } from "./Home/Feature";
import { GetStarted } from "./Home/GetStarted";
import { HowItWork } from "./Home/HowItWork";
import { Landing } from "./Home/Landing";
import { PreFooter } from "./Home/PreFooter";
import { Stats } from "./Home/Stats";
import { Testimonials } from "./Home/Testimonials";

export const Home = () => {
  return (
    <div className="">
      {/* Landing */}
      <Landing />
      <HowItWork />
      <Discover />
      <Feature />
      <Stats />
      <GetStarted />
      <Testimonials />
      <PreFooter />
    </div>
  );
};
