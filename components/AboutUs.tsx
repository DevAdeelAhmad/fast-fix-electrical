import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full p-5 bg-indigo-200 lg:p-10">
      <Image
        className="rounded-xl shadow-md aspect-square"
        src={"/assets/about.png"}
        alt="About Us Image"
        width={700}
        height={700}
      />
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">About Us</h1>
        <p className="font-medium text-base lg:text-lg">
          Fast Fix Automotive is where passion drives performance. As an
          established automaker, we specialise in creating automobiles that
          transform your driving experience. We are committed to innovation and
          customer satisfaction. We take pleasure in providing efficiency and
          dependability. Welcome to the road to automotive excellence with Fast
          Fix Automotive!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
