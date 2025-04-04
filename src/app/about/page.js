"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Use primary color for main heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Panda Puzzle
      </motion.h1>

      {/* Remove background/shadow from outer div, apply to sections */}
      <motion.div
        className="space-y-12" // Increased spacing
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* What We Offer Section with Accent Background */}
        <section className="bg-accent/20 p-6 rounded-lg shadow-sm">
          {/* Use secondary color for section heading */}
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg leading-relaxed">
            Panda Puzzle is more than just a website; it's a growing resource
            hub designed to support your journey. We offer:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
            <li>
              <strong>Informative Guides:</strong> Pages dedicated to
              understanding{" "}
              <Link href="/autism" className="text-blue-600 hover:underline">
                Autism
              </Link>
              ,{" "}
              <Link
                href="/neurodiversity"
                className="text-blue-600 hover:underline"
              >
                Neurodiversity
              </Link>
              ,{" "}
              <Link
                href="/sensory-detective"
                className="text-blue-600 hover:underline"
              >
                Sensory Processing
              </Link>
              , and interpreting{" "}
              <Link
                href="/understanding-responses"
                className="text-blue-600 hover:underline"
              >
                Responses
              </Link>
              .
            </li>
            <li>
              <strong>Carefully Selected Products:</strong> Our{" "}
              <Link href="/shop" className="text-blue-600 hover:underline">
                Shop
              </Link>{" "}
              features a range of educational toys, sensory tools, and
              supportive products designed to aid development and regulation.
            </li>
            <li>
              <strong>A Supportive Community (Coming Soon!):</strong> We aim to
              foster a space where families can connect, share experiences, and
              find encouragement.
            </li>
          </ul>
          <div className="my-6 flex justify-center">
            <Image
              src="/assets/teddy_bears.webp" // Placeholder
              alt="Collection of colourful teddy bears"
              width={500}
              height={333}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Mission & Values Link Card */}
        <section>
          {/* Add border color */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/50">
            <Link href="/about/mission-values" className="block group">
              <CardHeader>
                {/* Use primary color for card title */}
                <CardTitle className="text-xl text-primary group-hover:underline">
                  Our Mission & Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn more about the core principles that guide Panda Puzzle,
                  our commitment to acceptance, understanding, and empowerment.
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <span className="text-blue-600 hover:underline font-medium">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          </Card>
        </section>

        {/* Commitment Section with Secondary Background */}
        <section className="bg-secondary/10 p-6 rounded-lg shadow-sm">
          {/* Use secondary color for section heading */}
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
            Our Commitment
          </h2>
          <p className="text-lg leading-relaxed">
            We are committed to helping you create the best possible environment
            for your child – one where their unique abilities are celebrated,
            their challenges are met with understanding, and their potential can
            flourish. Join us in building a world that accepts, understands, and
            values every way of thinking.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
