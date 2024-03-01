import React from "react";
import { Button } from "./ui/button";

const ContactTeam = () => {
  return (
    <section className="flex flex-col gap-2 w-full py-5">
      <span className="p-3 lg:p-5 w-fit rounded-xl bg-indigo-500 text-xl md:text-3xl lg:text-5xl font-bold text-white">
        Contact Our Key Team
      </span>
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
            Mosese Tupou [Director]
          </h2>
          <h3 className="text-base lg:text-lg font-semibold">021 203 6686</h3>
          <p className="font-medium text-sm lg:text-base text-center">
            “Mosese Tupou is our director, and he frequently manages various
            areas of a car related business or organisation. This includes roles
            like director of a car manufacturing company and director of sales
            at Fast Fix Automotive. Mosese is also in charge of making strategic
            decisions, planning, and directing operations to help the company
            accomplish its objectives. They may be responsible for controlling
            production processes and managing sales teams. With these specific
            obligations, he is quite adaptable to your needs.”{" "}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
            Oleseni Vaikaka [Vehicle Inspector]
          </h2>
          <h3 className="text-base lg:text-lg font-semibold">022 153 5054</h3>
          <p className="font-medium text-sm lg:text-base text-center">
            “Oleseni Vaikaka is our professional inspector, in charge of
            checking and analysing the condition, safety, and compliance of your
            cars. undertaking rigorous examinations to uncover any mechanical
            problems, structural damage, or safety concerns in automobiles.
            Oleseni assures that your vehicles meet regulatory requirements and
            are safe to operate on the road. His responsibilities may include
            performing visual inspections, testing automobiles, and utilising
            specialised equipment to detect faults or malfunctions. attempting
            to give accurate and complete vehicle assessments in order to help
            maintain safety standards and ensure that automobiles function
            effectively.”
          </p>
        </div>
      </div>
      <Button className="bg-indigo-500 hover:bg-indigo-500/70 w-fit mx-auto text-xl font-semibold">
        Contact Us
      </Button>
    </section>
  );
};

export default ContactTeam;
