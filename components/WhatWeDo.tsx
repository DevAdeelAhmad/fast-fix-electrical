import React from "react";
import { Button } from "./ui/button";

const WhatWeDo = () => {
  return (
    <div
      id="whatWeDo"
      className="flex flex-col gap-y-8 justify-center items-center text-center py-10"
    >
      <div className="flex flex-col gap-y-5">
        <span className="font-bold text-3xl lg:text-6xl text-amber-950">
          What we do
        </span>
        <span className="font-bold text-lg lg:text-3xl">
          All things Electrical{" "}
        </span>
      </div>
      <span className="sm:max-w-xl md:max-w-4xl lg:max-w-6xl text-lg font-bold max-sm:text-justify">
        Welcome to Fast Fix Electrical, your trusted partner in powering the
        future. As a leading electric company, we are committed to providing
        modern and sustainable energy solutions that meet your evolving needs.
        We take pride in offering cutting-edge electrical services that drive
        progress and empower communities, all while adhering to the principles
        of dependability, efficiency, and environmental responsibility. Our
        experienced individuals are passionate about using electricity to drive
        improvements in technology, industry, and everyday life. Fast Fix
        Electrical illuminates the route to a brighter, more exciting future.
        Join us on our path towards a more sustainable and connected future.
      </span>
      <div className="w-52 h-[4px] rounded-xl bg-amber-950" />
      <Button className="font-bold text-2xl px-16 py-6 bg-amber-950 rounded-full">
        Learn More
      </Button>
    </div>
  );
};

export default WhatWeDo;
