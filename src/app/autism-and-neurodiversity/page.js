"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components

// Define the sections to link to
const sections = [
  {
    title: "Understanding Autism: A Parent's Guide",
    description:
      "Learn about autism as a lifelong condition, its strengths, challenges, and the importance of environment.",
    href: "/autism",
  },
  {
    title: "What is Neurodiversity?",
    description:
      "Explore the concept of neurodiversity as a natural variation in human brain function and its importance.",
    href: "/neurodiversity",
  },
  {
    title: "Becoming a Sensory & Response Detective",
    description:
      "Understand how sensory processing differences impact children and how to interpret behaviours as communication.",
    href: "/sensory-detective",
  },
  {
    title: "Understanding Responses vs. Behaviours",
    description:
      "A deeper dive into different types of responses (sensory, communication, social) and why framing matters.",
    href: "/understanding-responses",
  },
];

export default function AutismNeurodiversityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {" "}
      {/* Increased max-width */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Autism & Neurodiversity Resources
      </motion.h1>
      <motion.p
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Explore our guides to better understand autism, neurodiversity, sensory
        processing, and communication. We believe in embracing differences and
        providing supportive environments.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <Link href={section.href} className="flex flex-col h-full group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-md leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  {" "}
                  {/* Footer area for link */}
                  <span className="text-blue-600 hover:underline font-medium">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
