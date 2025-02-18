"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Features from "./components/Features";
import AgeGroups from "./components/AgeGroups";
import Products from "./components/Products";
import SupportTools from "./components/SupportTools";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AgeGroups />
      <Products />
      <SupportTools />
      <Testimonials />
    </main>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            data-motion
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Supporting Growth,{" "}
              </motion.span>
              <motion.span
                className="text-[#FF7F50] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Embracing
                <span className="absolute bottom-[-5px] left-0 w-full h-[4px] border-4 border-[#FF7F50] border-solid border-b-transparent border-l-transparent border-r-transparent rounded-[100%]"></span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Differences
              </motion.span>
            </h1>
            <motion.p
              className="text-gray-600 mb-8 max-w-xl text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              At Panda Puzzle, we empower families and children by providing
              support and resources, fostering a world where every unique
              journey is celebrated and nurtured.
            </motion.p>
            <motion.div
              className="flex gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                href="/"
                className="inline-block bg-[#2B4157] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d2d3d] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#80D0C7] pb-6 flex items-center justify-center rounded-l-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex justify-center items-center gap-12">
                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="relative h-12 w-auto flex items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/assets/dummy-logo.webp"
                      alt={`Logo ${index}`}
                      width={150}
                      height={150}
                      className="opacity-50"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative h-[500px] md:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute right-10 top-0 w-full h-full bg-[#2B4157] rounded-tl-[600px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/assets/teddy_bears.webp"
                alt="Children with stuffed animals"
                fill
                className="object-cover scale-110 z-10 overflow-visible"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FF7F50]/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-12 right-12 w-24 h-24 bg-[#FF7F50]/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
