"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import resourceData from "@/data/resources.json"; // Import the resource data

export default function SupportResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support and Resources
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg leading-relaxed mb-6">
          {" "}
          {/* Added margin bottom */}
          Finding the right support and resources is crucial for families
          navigating neurodiversity. This section aims to be a curated
          collection of helpful organizations, tools, therapeutic approaches,
          and community supports. Resources marked with '#' are placeholders for
          specific links.
        </p>

        {/* Map through resource categories */}
        {resourceData.map((categoryData, categoryIndex) => (
          <section
            key={categoryIndex}
            className="mt-8 pt-6 border-t first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {categoryData.category}
            </h2>
            <div className="space-y-4">
              {categoryData.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="pb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {resource.link && resource.link !== "#" ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {resource.name}
                      </a>
                    ) : (
                      resource.name
                    )}
                  </h3>
                  <p className="text-md text-gray-600 leading-relaxed mt-1">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 pt-6 border-t text-center">
          {" "}
          {/* Adjusted margin */}
          <Link
            href="/contact"
            className="text-blue-600 hover:underline font-semibold"
          >
            Have a resource suggestion or correction? Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
