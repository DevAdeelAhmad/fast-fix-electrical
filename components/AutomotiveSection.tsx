"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";
import { Button } from "./ui/button";

export default function AutomotiveSection() {
  const images = [
    "/assets/automotive.png",
    "/assets/automotive.png",
    "/assets/automotive.png",
  ];
  return (
    <ImagesSlider className="h-[25rem] md:h-[40rem] mb-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-extrabold text-2xl md:text-6xl text-center text-indigo-500 py-4">
          Automotive Section
        </motion.p>
        <motion.p className="font-bold text-lg md:text-3xl text-center text-white py-4">
          Driving Dreams, Powering Journeys Your Road, Our Expertise
        </motion.p>
        <div className="flex items-center gap-5 my-5">
          <Button className="bg-indigo-500 hover:bg-indigo-500/70">
            All Services
          </Button>
          <Button className="bg-indigo-500 hover:bg-indigo-500/70">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
