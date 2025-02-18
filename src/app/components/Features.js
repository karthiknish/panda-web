"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Autism & Neurodiversity",
      description:
        "Specialized toys and tools designed to support sensory needs and development.",
      image: "/assets/feature-holding.jpg",
      link: "/autism-and-neurodiversity",
    },
    {
      title: "Communication",
      description:
        "Tools and toys that help develop communication skills and expression.",
      image: "/assets/feature-holding.jpg",
      link: "/communication",
    },
    {
      title: "Sensory Tools",
      description:
        "Carefully curated sensory tools for various developmental needs.",
      image: "/assets/feature-holding.jpg",
      link: "/sensory-tools",
    },
    {
      title: "Visual Aid",
      description:
        "Visual supports and learning aids for better understanding.",
      image: "/assets/feature-holding.jpg",
      link: "/visual-aids",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-medium text-[#80D0C7] mb-2">
            Our Categories
          </p>
          <h1 className="text-4xl font-bold">
            Explore the Most Popular Toy{" "}
            <span className="relative text-[#FF7F50]">
              Brands
              <span className="absolute bottom-[-5px] left-0 w-full h-[4px] border-4 border-[#FF7F50] border-solid border-b-transparent border-l-transparent border-r-transparent rounded-[100%]"></span>
            </span>{" "}
            Kids Worldwide
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-white">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#E6F7F4] rounded-[32px] hover:shadow-lg transition-shadow relative flex flex-row items-center h-[250px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-1/3 mr-6 h-full relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="mt-auto">
                  <div className="relative inline-block">
                    <div className="bg-white absolute inset-0 top-[-10px] left-[-20px] rounded-lg h-[150px] w-[400px]"></div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={feature.link}
                        className="relative inline-flex items-center px-6 py-2 bg-[#FF7F50] text-white font-medium rounded-full hover:bg-[#FF7F50]/80"
                      >
                        Learn More
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
