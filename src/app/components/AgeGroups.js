"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AgeGroups() {
  const ageGroups = [
    {
      range: "3-6 years",
      title: "Products For 3-6 years",
      description:
        "Early development toys focusing on basic motor skills, sensory exploration, and creative play. Perfect for preschoolers and kindergarteners.",
      image: "https://placehold.co/250x250",
      link: "/products/age-3-6",
    },
    {
      range: "6-8 years",
      title: "Products For 6-8 years",
      description:
        "Educational toys and games that support reading, writing, and problem-solving skills. Great for elementary school children.",
      image: "https://placehold.co/250x250",
      link: "/products/age-6-8",
    },
    {
      range: "8-10 years",
      title: "Products For 8-10 years",
      description:
        "More complex toys and activities that encourage critical thinking, social skills, and independent play. Ideal for older elementary students.",
      image: "https://placehold.co/250x250",
      link: "/products/age-8-10",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-medium text-[#80D0C7] mb-2 text-center">
            Our Age Groups
          </p>
          <h1 className="text-4xl font-bold text-center">
            Age-Appropriate Products for{" "}
            <span className="relative text-[#FF7F50]">
              Every Stage
              <span className="absolute bottom-[-5px] left-0 w-full h-[4px] border-4 border-[#FF7F50] border-solid border-b-transparent border-l-transparent border-r-transparent rounded-[100%]"></span>
            </span>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {ageGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="flex justify-center"
            >
              <Link
                href={group.link}
                className="group flex flex-col overflow-hidden rounded-2xl"
              >
                <motion.div
                  className="relative w-[250px] h-[250px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={250}
                    height={250}
                    className="object-contain rounded-t-2xl"
                  />
                </motion.div>
                <div className="p-4 bg-white w-[250px]">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.title}
                  </h3>
                  <span className="text-sm text-gray-600">{group.range}</span>
                  <p className="text-gray-600 mt-2">{group.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
