"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Kids Classic Weighted Blanket",
      price: "£24.99",
      image: "/product.png",
      link: "/products/weighted-blanket",
      rating: 4.8,
    },
    {
      name: "4-Light Level",
      price: "£99.99",
      image: "/product.png",
      link: "/products/light-level",
      rating: 4.5,
    },
    {
      name: "Sensory Mood Light Table",
      price: "£279.99",
      image: "/product.png",
      link: "/products/mood-light-table",
      rating: 4.9,
    },
    {
      name: "Jumbo Irregular Shapes",
      price: "£74.99",
      image: "/product.png",
      link: "/products/irregular-shapes",
      rating: 4.7,
    },
    {
      name: "Rainbow Mirror Letter",
      price: "£9.99",
      image: "/product.png",
      link: "/products/mirror-letter",
      rating: 4.6,
    },
    {
      name: "Set of 5 Light Up Foam",
      price: "£4.99",
      image: "/product.png",
      link: "/products/light-foam",
      rating: 4.4,
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-medium text-[#80D0C7] mb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Products
        </motion.p>
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Discover Our Entire Collection of{" "}
          <span className="relative text-[#FF7F50]">
            Products for Kids
            <span className="absolute bottom-[-5px] left-0 w-full h-[4px] border-4 border-[#FF7F50] border-solid border-b-transparent border-l-transparent border-r-transparent rounded-[100%]"></span>
          </span>{" "}
          of All Ages
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={product.link}
                className="group hover:shadow-lg transition-shadow rounded-xl overflow-hidden block"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-[#FF7F50] font-semibold mt-1">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
