"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription, // Optional, maybe not needed here
  CardFooter, // Optional, maybe not needed here
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components
import products from "@/data/products.json"; // Import product data from JSON file

export default function ShopPage() {
  // Remove inline dummy data
  /*
  const products = [
    {
      name: "Kids Classic Weighted Blanket",
      price: "£24.99",
      image: "/assets/product.png",
      link: "/products/weighted-blanket", // TODO: Update links if product pages exist
      rating: 4.8,
    },
    {
      name: "4-Light Level",
      price: "£99.99",
      image: "/assets/product.png",
      link: "/products/light-level",
      rating: 4.5,
    },
    {
      name: "Sensory Mood Light Table",
      price: "£279.99",
      image: "/assets/product.png",
      link: "/products/mood-light-table",
      rating: 4.9,
    },
    {
      name: "Jumbo Irregular Shapes",
      price: "£74.99",
      image: "/assets/product.png",
      link: "/products/irregular-shapes",
      rating: 4.7,
    },
    {
      name: "Rainbow Mirror Letter",
      price: "£9.99",
      image: "/assets/product.png",
      link: "/products/mirror-letter",
      rating: 4.6,
    },
    {
      name: "Set of 5 Light Up Foam",
      price: "£4.99",
      image: "/assets/product.png",
      link: "/products/light-foam",
      rating: 4.4,
    },
    // Add more dummy products if needed
    {
      name: "Another Sensory Toy",
      price: "£19.99",
      image: "/assets/product.png",
      link: "/products/another-toy",
      rating: 4.2,
    },
    {
      name: "Weighted Lap Pad",
      price: "£34.99",
      image: "/assets/product.png",
      link: "/products/lap-pad",
      rating: 4.7,
    },
    {
      name: "Chewable Necklace",
      price: "£8.99",
      image: "/assets/product.png",
      link: "/products/chew-necklace",
      rating: 4.3,
    },
  ];
  */

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Shop
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Browse our collection of sensory tools and supportive products.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {products.map((product, index) => (
          // Use Shadcn Card component
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
              {/* Construct href using product.slug */}
              <Link
                href={`/products/${product.slug}`}
                className="flex flex-col h-full"
              >
                <CardHeader className="p-0">
                  {" "}
                  {/* Remove padding for image */}
                  <div className="relative w-full h-64 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  {" "}
                  {/* Add flex-grow */}
                  <div>
                    {" "}
                    {/* Wrapper for title and rating */}
                    <CardTitle className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600 mb-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center mb-2">
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
                      <span className="ml-2 text-sm text-gray-500">
                        ({product.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900 mt-2">
                    {product.price}
                  </p>
                  {/* CardFooter could go here if needed */}
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
