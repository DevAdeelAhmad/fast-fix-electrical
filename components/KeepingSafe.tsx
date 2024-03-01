import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const KeepingSafe = () => {
  return (
    <section className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 w-full p-5 lg:p-10">
      <div className="flex-[0.3] flex justify-evenly flex-wrap">
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            src={"/assets/integrity.png"}
            alt="Integrity Image"
            width={150}
            height={150}
          />
          <span className="font-semibold text-center mx-auto text-xl">
            Integrity
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            src={"/assets/honesty.png"}
            alt="honesty Image"
            width={150}
            height={150}
          />
          <span className="font-semibold text-center mx-auto text-xl">
            Honesty
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            src={"/assets/quality.png"}
            alt="quality Image"
            width={150}
            height={150}
          />
          <span className="font-semibold text-center mx-auto text-xl">
            Quality
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            src={"/assets/honesty.png"}
            alt="honesty Image"
            width={150}
            height={150}
          />
          <span className="font-semibold text-center mx-auto text-xl">
            Honesty
          </span>
        </div>
      </div>
      <div className="flex flex-[0.5] flex-col gap-10 items-center justify-center text-start">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-indigo-500">
          Keeping You Safe
        </h1>
        <p className="font-medium text-base lg:text-lg">
          Regular car maintenance keeps you safe on the road by recognising and
          addressing any problems before they become significant ones. This
          routine servicing ensures that your vehicle runs at peak efficiency,
          lowering the likelihood of failures or malfunctions that could
          jeopardise your safety. Regular maintenance also involves inspections
          of brakes, tyres, lights, and other critical components, which
          contribute to overall roadworthiness and provide peace of mind while
          driving.
        </p>
        <Button className="font-bold bg-indigo-500 text-lg w-fit">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default KeepingSafe;
