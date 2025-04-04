"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Optional: if linking to specific resources later

export default function EducationLegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education and Legal Information
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg leading-relaxed">
          Navigating the educational system and understanding legal rights can
          be complex. This section is dedicated to providing information and
          resources related to educational support, accommodations, and legal
          frameworks relevant to children with neurodevelopmental differences
          and their families.
        </p>
        <p className="text-lg leading-relaxed">
          We are currently developing comprehensive guides and links to relevant
          organizations and legal resources. Please check back soon for updates.
        </p>
        {/* Placeholder for future content sections */}
        <section className="mt-8 pt-6 border-t">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Topics Coming Soon:
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>Understanding IEPs and 504 Plans</li>
            <li>Advocacy Tips for School Meetings</li>
            <li>Know Your Rights: Disability Laws in Education</li>
            <li>Finding Educational Consultants and Advocates</li>
            <li>Homeschooling Resources</li>
          </ul>
        </section>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="text-blue-600 hover:underline font-semibold"
          >
            Have specific questions? Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
