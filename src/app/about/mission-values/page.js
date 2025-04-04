"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Keep for potential future images
import Link from "next/link";

export default function MissionValuesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Mission & Values
      </motion.h1>

      <motion.div
        className="space-y-8 text-gray-700 bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            At Panda Puzzle, our mission is to empower parents, carers, and
            families navigating the journey of neurodiversity. We believe that
            understanding and acceptance are key to helping every child thrive.
            We strive to provide reliable information, practical tools, and
            supportive resources that celebrate the unique strengths and
            perspectives neurodivergent children bring to the world.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Philosophy & Values
          </h2>
          <p className="text-lg leading-relaxed">
            We view neurodiversity – including conditions like Autism, ADHD, and
            others – not as a disorder to be fixed, but as a natural and
            valuable part of human variation. Our approach is rooted in the
            understanding that challenges often arise not from the child
            themselves, but from environments that aren't suited to their needs.
            As Luke Beardon aptly puts it, "Autism + Environment = Outcome."
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We advocate for shifting the focus from managing "behaviour" to
            understanding "responses." We believe that every action is a form of
            communication, offering insights into a child's sensory experiences,
            emotional state, or unmet needs. By becoming 'sensory and response
            detectives,' we can create more supportive, empathetic, and
            effective environments where children feel safe, understood, and
            valued.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Core Values:
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Acceptance:</strong> Embracing neurodiversity as a
              strength.
            </li>
            <li>
              <strong>Understanding:</strong> Seeking to understand the 'why'
              behind responses.
            </li>
            <li>
              <strong>Empowerment:</strong> Providing families with knowledge
              and tools.
            </li>
            <li>
              <strong>Support:</strong> Fostering a community of shared
              experience and encouragement.
            </li>
            <li>
              <strong>Positivity:</strong> Focusing on strengths and celebrating
              differences.
            </li>
          </ul>
        </section>

        <div className="mt-12 pt-6 border-t text-center">
          <Link
            href="/about"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Back to About Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
