"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SupportTools() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/assets/family.jpg"
                alt="Family cooking together"
                fill
                className="rounded-2xl object-cover z-10"
              />
            </div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF7F50]/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#80D0C7]/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.p
              className="text-sm font-medium text-[#80D0C7] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover More
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore Our Extensive Range of{" "}
              <span className="relative text-[#FF7F50]">
                Supportive Tools
                <span className="absolute bottom-[-5px] left-0 w-full h-[4px] border-4 border-[#FF7F50] border-solid border-b-transparent border-l-transparent border-r-transparent rounded-[100%]"></span>
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Delve into everything Panda Puzzle has to offer for children with
              autism, sensory processing challenges, and learning disabilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/tools"
                className="inline-flex items-center px-8 py-3 bg-[#FF7F50] text-white font-medium rounded-full hover:bg-[#FF7F50]/90 transition-colors"
              >
                Get started
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
