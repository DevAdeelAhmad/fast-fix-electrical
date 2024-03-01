import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WhatWeCanDo = () => {
  return (
    <section className="flex flex-col gap-2 w-full py-5 ">
      <span className="p-3 lg:p-5 w-fit rounded-xl bg-indigo-500 text-xl md:text-3xl lg:text-5xl font-bold text-white">
        What We Can Do
      </span>
      <div className="flex gap-x-6 justify-center items-center flex-wrap p-4 gap-y-4 bg-indigo-200 ">
        <div className="relative w-[250px] h-[80px] md:w-[500px] md:h-[150px] px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span className="text-lg md:text-3xl lg:text-4xl">WOF</span>
          <FaArrowRight className="absolute right-4 text-base md:text-lg lg:text-xl" />
        </div>
        <div className="relative w-[250px] h-[80px] md:w-[500px] md:h-[150px] px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span className="text-lg md:text-3xl  lg:text-4xl px-5">
            Service Oil change
          </span>
          <FaArrowRight className="absolute right-4 text-base md:text-lg lg:text-xl" />
        </div>
        <div className="relative w-[250px] h-[80px] md:w-[500px] md:h-[150px] px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span className="text-lg md:text-3xl  lg:text-4xl">Tyre change</span>
          <FaArrowRight className="absolute right-4 text-base md:text-lg lg:text-xl" />
        </div>
        <div className="relative w-[250px] h-[80px] md:w-[500px] md:h-[150px] px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span className="text-lg md:text-3xl lg:text-4xl px-8">
            Break pad replacement
          </span>
          <FaArrowRight className="absolute right-4 text-base md:text-lg lg:text-xl" />
        </div>
        <div className="relative w-[250px] h-[80px] md:w-[500px] md:h-[150px] px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span className="text-lg md:text-3xl  lg:text-4xl ">
            Mechanical needs{" "}
          </span>
          <FaArrowRight className="absolute right-4 text-base md:text-lg lg:text-xl" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDo;
