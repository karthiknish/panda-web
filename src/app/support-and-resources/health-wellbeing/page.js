"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HealthWellbeingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Health & Wellbeing
      </motion.h1>

      <motion.div
        className="space-y-6 text-foreground bg-background p-6 md:p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg leading-relaxed">
          Supporting the physical and mental health of neurodivergent children
          and their families is paramount. This section will provide information
          on common co-occurring health conditions, mental health support,
          nutrition, sleep strategies, and promoting overall wellbeing.
        </p>
        <p className="text-lg leading-relaxed">
          We are currently gathering resources and information for this section.
          Please check back for updates on topics relevant to maintaining a
          healthy and balanced life.
        </p>

        <section className="mt-8 pt-6 border-t border-border/50">
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
            Topics Coming Soon:
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>Common Co-occurring Conditions (e.g., Anxiety, GI issues)</li>
            <li>Finding Neurodiversity-Affirming Therapists</li>
            <li>Mental Health Support for Parents & Carers</li>
            <li>Nutrition and Dietary Considerations</li>
            <li>Sleep Strategies and Support</li>
            <li>Importance of Movement and Exercise</li>
            <li>Mindfulness and Relaxation Techniques</li>
          </ul>
        </section>

        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <Link
            href="/support-and-resources"
            className="text-blue-600 hover:underline font-semibold"
          >
            &larr; Back to Support & Resources
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
