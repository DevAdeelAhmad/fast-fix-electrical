import React from "react";
import Form from "./form/Form";
import Image from "next/image";

const ReadyToTalk = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-10 py-10">
      <span className="text-indigo-500 text-4xl md:text-7xl font-bold ">
        Ready To Talk
      </span>
      <span className="text-indigo-500 text-2xl lg:text-4xl font-bold">
        Contact Us
      </span>
      <div className="flex flex-col lg:flex-row flex-1 w-full gap-y-8">
        <div className="flex flex-col flex-[0.5] gap-y-8 lg:gap-y-14 ">
          {/* 1. */}
          <div className="flex flex-col gap-3">
            <span className="border-t-2 border-black font-semibold text-xl">
              Monday- Friday: 08:00am 5:00pm <br /> Saturday: 08:00am 3:00pm
            </span>{" "}
            <span className="border-t-2 border-black font-semibold text-xl">
              Call: 09 276 5054
            </span>
            <span className="border-t-2 border-black font-semibold text-xl border-b-2">
              Email: FastFix.Mt@Gmail.com
            </span>
          </div>
          {/* 2. */}
          <div className="flex flex-col gap-3">
            <span className="border-t-2 border-black font-semibold text-xl">
              Name: Mosese Tupou (Director)
            </span>{" "}
            <span className="border-t-2 border-black font-semibold text-xl">
              Call: 021 203 6686
            </span>
            <span className="border-t-2 border-black font-semibold text-xl border-b-2">
              Email: FastFix.Mt@Gmail.com
            </span>
          </div>
          {/* 3. */}
          <div className="flex flex-col gap-3">
            <span className="border-t-2 border-black font-semibold text-xl">
              Name: Oleseni Vaikaka (Vehicle Inspector)
            </span>{" "}
            <span className="border-t-2 border-black font-semibold text-xl">
              Call: 022 153 5054
            </span>
            <span className="border-t-2 border-black font-semibold text-xl border-b-2">
              Email: FastFix.Mt@Gmail.com
            </span>
          </div>
          {/* end */}
        </div>
        <div className="flex flex-[0.5] justify-center items-center">
          <Form />
        </div>
      </div>

      {/* .. */}

      <div className="flex justify-evenly w-full">
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
      </div>
    </section>
  );
};

export default ReadyToTalk;
