"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LivingWithAutismPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Living with Autism: Daily Life & Strategies
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg leading-relaxed">
          This section will explore the day-to-day realities, joys, and
          challenges of living with autism, both for the individual and their
          family. We'll share practical strategies, insights from autistic
          adults and parents, and tips for fostering independence and
          well-being.
        </p>
        <p className="text-lg leading-relaxed">
          Content is currently under development. We plan to cover topics such
          as routines, communication strategies, navigating social situations,
          managing sensory sensitivities in daily life, celebrating special
          interests, and building supportive relationships.
        </p>

        <section className="mt-8 pt-6 border-t">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Topics Coming Soon:
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>Establishing Predictable Routines</li>
            <li>Visual Supports for Daily Tasks</li>
            <li>Strategies for Social Outings</li>
            <li>Supporting Friendships</li>
            <li>Managing Meltdowns and Shutdowns</li>
            <li>Nurturing Special Interests</li>
            <li>Transitioning Through Life Stages</li>
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
