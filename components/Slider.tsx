import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderData } from "@/constants/SliderData";
import Image from "next/image";
import { Button } from "./ui/button";

const Slider = () => {
  return (
    <section className="flex items-center justify-center w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-full">
          {sliderData.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 w-min">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={item.picture}
                  alt="pic"
                  width={500}
                  height={500}
                  className="w-[270px] h-[180px] sm:w-[385px] sm:h-[250px] md:w-[465px] md:h-[280px] lg:w-[430px] lg:h-[350px]"
                />
                <div className="flex flex-col gap-y-4 items-center justify-center p-4 bg-gray-300">
                  <span className="font-bold text-3xl">{item.heading}</span>
                  <span className="max-sm:w-[200px] max-w-[400px]">
                    {item.description}
                  </span>
                  <Button className="rounded-full text-md font-bold lg:text-xl px-12 py-6 bg-gray-300 border-2 border-black text-black hover:bg-gray-400 w-fit">
                    {item.button}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Slider;
