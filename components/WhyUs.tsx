import React from "react";
import { Button } from "./ui/button";
import whyUs from "@/public/assets/whyUs.png";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-16 py-10">
      <div className="flex flex-col xl:flex-row gap-x-5 xl:justify-between justify-center items-center gap-y-6">
        <div className="flex flex-col gap-y-6 md:gap-y-12 justify-center items-start">
          <span className="text-white md:text-3xl px-20 py-5 font-bold bg-amber-950 rounded-r-xl rounded-l-none">
            Why Us?
          </span>
          <div className="flex flex-col gap-y-6">
            <span className="font-bold md:text-lg">
              We priorities the dependability of its services, reducing the
              likelihood of power outages and disturbances. This guarantees that
              your power supply is consistent and stable
            </span>
            <span className="font-bold md:text-lg">
              We stay current on technical breakthroughs, adopting creative
              solutions to improve energy efficiency, decrease environmental
              impact, and provide cutting-edge services. Choosing us provides
              forward-thinking, ensuring that you benefit from the newest
              innovations in the business.
            </span>
            <span className="font-bold md:text-lg">
              Excellent customer service is vital for responding to your
              inquiries, resolving issues quickly, and offering support when
              needed. We are a customer-focused electric company that
              appreciates its customers and aims to provide great service at all
              times.
            </span>
          </div>
        </div>
        <Image
          src={whyUs}
          alt="project-one"
          width={1000}
          height={1000}
          className="md:flex-[0.35] w-[700px] md:h-[550px]"
        />
      </div>
    </section>
  );
};

export default WhyUs;
