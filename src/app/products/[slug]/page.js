"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"; // Import notFound for handling invalid slugs
import { useCart } from "@/app/context/CartContext"; // Import useCart hook
import { Button } from "@/components/ui/button"; // Import Shadcn Button
import allProducts from "@/data/products.json"; // Import product data from JSON file

// Function to find product by slug (moved up)
const getProductBySlug = (slug) => {
  return allProducts.find((p) => p.slug === slug);
};

// Dummy product data (ideally fetched from an API or CMS)
/* // Comment out start
const allProducts = [
  {
    slug: "weighted-blanket",
    name: "Kids Classic Weighted Blanket",
    price: "£24.99",
    image: "/assets/product.png",
    rating: 4.8,
    description:
      "A comforting weighted blanket designed specifically for children, providing gentle pressure to promote calmness and better sleep. Made with soft, breathable fabric.",
    details: [
      "Dimensions: 90cm x 120cm",
      "Weight: 2.3kg",
      "Material: 100% Cotton outer, non-toxic glass bead filling",
      "Care: Machine washable cover",
    ],
  },
  {
    slug: "light-level",
    name: "4-Light Level",
    price: "£99.99",
    image: "/assets/product.png",
    rating: 4.5,
    description:
      "An adjustable light source with four distinct brightness levels, perfect for creating different moods or accommodating varying light sensitivities. Ideal for sensory rooms or bedrooms.",
    details: [
      "Adjustable brightness: 4 levels",
      "Light type: LED",
      "Power: Mains operated",
      "Features: Remote control included",
    ],
  },
  {
    slug: "mood-light-table",
    name: "Sensory Mood Light Table",
    price: "£279.99",
    image: "/assets/product.png",
    rating: 4.9,
    description:
      "Engage the senses with this captivating mood light table. It cycles through various colors or can be set to a specific hue, providing visual stimulation and a calming effect.",
    details: [
      "Dimensions: 60cm x 60cm x 40cm",
      "Material: Durable plastic",
      "Features: Rechargeable, remote control, multiple color modes",
      "Use: Suitable for sensory play and exploration",
    ],
  },
  {
    slug: "irregular-shapes",
    name: "Jumbo Irregular Shapes",
    price: "£74.99",
    image: "/assets/product.png",
    rating: 4.7,
    description:
      "A set of large, uniquely shaped blocks designed to encourage creative building and spatial reasoning. Their irregular forms offer a different challenge compared to standard blocks.",
    details: [
      "Set includes: 10 assorted shapes",
      "Material: High-density foam",
      "Size: Various large sizes",
      "Features: Soft, safe, and easy to handle",
    ],
  },
  {
    slug: "mirror-letter",
    name: "Rainbow Mirror Letter",
    price: "£9.99",
    image: "/assets/product.png",
    rating: 4.6,
    description:
      "A fun and engaging way to learn letters. This mirrored letter features a vibrant rainbow effect, capturing attention and making literacy activities more exciting.",
    details: [
      "Material: Acrylic mirror",
      "Size: Approx 15cm height",
      "Features: Shatter-resistant, colorful reflective surface",
      "Use: Educational tool for letter recognition",
    ],
  },
  {
    slug: "light-foam",
    name: "Set of 5 Light Up Foam Batons", // Updated name for clarity
    price: "£4.99",
    image: "/assets/product.png",
    rating: 4.4,
    description:
      "Add excitement to sensory play or parties with these soft, light-up foam batons. They cycle through different colors and are safe for gentle play.",
    details: [
      "Set includes: 5 batons",
      "Material: Soft foam",
      "Features: Multi-color LED lights, battery operated (included)",
      "Size: Approx 40cm length",
    ],
  },
  {
    slug: "another-toy",
    name: "Another Sensory Toy",
    price: "£19.99",
    image: "/assets/product.png",
    rating: 4.2,
    description:
      "Placeholder description for another fantastic sensory toy designed to engage and stimulate.",
    details: ["Detail 1", "Detail 2", "Detail 3"],
  },
  {
    slug: "lap-pad",
    name: "Weighted Lap Pad",
    price: "£34.99",
    image: "/assets/product.png",
    rating: 4.7,
    description:
      "Provides calming deep pressure for the lap and upper legs, ideal for use during seated activities at home or school. Helps improve focus and reduce restlessness.",
    details: [
      "Dimensions: 50cm x 30cm",
      "Weight: 1.5kg",
      "Material: Soft, durable fabric cover",
      "Features: Portable, discreet",
    ],
  },
  {
    slug: "chew-necklace",
    name: "Chewable Necklace",
    price: "£8.99",
    image: "/assets/product.png",
    rating: 4.3,
    description:
      "A safe and discreet oral motor tool for children who need to chew. Made from food-grade silicone, it helps satisfy chewing needs and can aid concentration.",
    details: [
      "Material: 100% food-grade silicone",
      "Safety: BPA-free, PVC-free, lead-free",
      "Features: Breakaway clasp for safety",
      "Design: Various shapes available (pendant style)",
    ],
  },
];
*/ // Comment out end

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart(); // Get addToCart function from context

  // If product not found, render 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Image */}
        <motion.div
          className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority // Prioritize loading the main product image
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
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
            <span className="ml-2 text-md text-gray-600">
              {product.rating.toFixed(1)} stars
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold text-gray-900 mb-6">
            {product.price}
          </p>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p>{product.description}</p>
          </div>

          {/* Details */}
          {product.details && product.details.length > 0 && (
            <div className="text-gray-700 leading-relaxed mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Details
              </h2>
              <ul className="list-disc list-inside space-y-1 pl-1">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart Button */}
          {/* Use Shadcn Button, remove motion */}
          <Button
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700" // Keep custom colors if needed
            size="lg" // Use larger size for prominence
            onClick={() => {
              addToCart(product);
              alert(`${product.name} added to cart!`); // Simple confirmation
            }}
          >
            Add to Cart
          </Button>

          {/* Back to Shop Link */}
          <div className="mt-8">
            <Link href="/shop" className="text-blue-600 hover:underline">
              &larr; Back to Shop
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* TODO: Add related products section? */}
    </div>
  );
}
