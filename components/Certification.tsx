import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  "/assets/whyUs.png",
  "/assets/whyUs.png",
  "/assets/whyUs.png",
  "/assets/whyUs.png",
];
const Certification = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-20 py-10">
      <div className="space-y-3">
        <h1 className="font-bold uppercase text-3xl lg:text-6xl text-amber-950">
          Certifications
        </h1>
        <div className="w-52 h-[4px] rounded-xl bg-amber-950 mx-auto" />
      </div>
      <div className="flex items-center justify-center px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1636px]"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="min-[640px]:basis-1/2 lg:basis-1/3"
              >
                <Image
                  src={item}
                  alt="pic"
                  width={1000}
                  height={1000}
                  className="w-[400px] rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Certification;
