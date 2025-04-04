"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignsOfAutismPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Does My Child Have Autism? (Signs & Characteristics)
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg leading-relaxed font-semibold text-red-600">
          Important Disclaimer: This information is for educational purposes
          only and is not a substitute for professional medical advice,
          diagnosis, or treatment. If you have concerns about your child's
          development, please consult with a qualified healthcare provider or
          developmental specialist.
        </p>
        <p className="text-lg leading-relaxed">
          Recognizing the signs and characteristics associated with autism can
          be the first step towards understanding and seeking appropriate
          support for your child. Autism presents differently in every
          individual, but there are common areas of development that might be
          affected.
        </p>
        <p className="text-lg leading-relaxed">
          This section will provide information on typical developmental
          milestones and characteristics often associated with autism across
          different age ranges, focusing on social communication, interaction,
          and restricted or repetitive behaviours/interests.
        </p>

        <section className="mt-8 pt-6 border-t">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Topics Coming Soon:
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>Early Signs in Infants and Toddlers</li>
            <li>Social Communication Differences</li>
            <li>Repetitive Behaviours and Restricted Interests</li>
            <li>Sensory Sensitivities</li>
            <li>Understanding the Diagnostic Process</li>
            <li>Differences in Presentation (e.g., Gender)</li>
            <li>Next Steps if You Have Concerns</li>
          </ul>
        </section>

        <div className="mt-12 pt-6 border-t text-center">
          <Link
            href="/autism"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Back to Understanding Autism
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
