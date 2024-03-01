import React from "react";
import Form from "./form/Form";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="flex flex-col gap-10 items-start justify-between py-10 w-full">
      <div className="flex lg:flex-row flex-col gap-10 items-start justify-between py-10 w-full">
        <div className="flex flex-col w-full gap-2 lg:flex-[0.5] items-center">
          <div className="pb-5 space-y-2">
            <h1 className="font-bold uppercase text-3xl lg:text-6xl text-amber-950 text-center">
              Location
            </h1>
            <div className="w-52 h-[4px] rounded-xl bg-amber-950 mx-auto" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204306.7054791679!2d174.54131518933562!3d-36.85942237586376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1709289613476!5m2!1sen!2s"
            className="max-[786px]:w-[300px] max-[786px]:h-[300px]"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-2 w-full lg:flex-[0.5]">
          <h1 className="font-bold uppercase text-3xl lg:text-6xl text-amber-950 text-center">
            Contact
          </h1>
          <div className="w-52 h-[4px] rounded-xl bg-amber-950 mx-auto" />
          <Form />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justfy-center gap-10">
        <div className="flex-[0.6] flex justify-evenly">
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
        <div className="flex flex-[0.4] flex-col gap-3">
          <span className="border-t-2 border-black font-semibold text-xl">
            Name
          </span>{" "}
          <span className="border-t-2 border-black font-semibold text-xl">
            Call: 09 276 5054
          </span>
          <span className="border-t-2 border-black font-semibold text-xl border-b-2">
            Email: FastFix.Mt@Gmail.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
