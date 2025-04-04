"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import resourceData from "@/data/resources.json"; // Import the resource data
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components

export default function SupportResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Use primary color for heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support and Resources
      </motion.h1>

      {/* Use theme background */}
      <motion.div
        className="space-y-8 text-foreground bg-background p-6 md:p-8 rounded-lg shadow-sm"
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
            className="mt-8 pt-6 border-t border-border/50 first:border-t-0 first:pt-0" // Use theme border
          >
            {/* Use secondary color for category headings */}
            <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
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
                  {/* Use muted foreground for description */}
                  <p className="text-md text-muted-foreground leading-relaxed mt-1">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Add Card linking to Health & Wellbeing */}
        <section className="mt-10 pt-6 border-t border-border/50">
          <Card className="hover:shadow-md transition-shadow duration-300 bg-accent/20">
            <Link
              href="/support-and-resources/health-wellbeing"
              className="block group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-accent-foreground group-hover:text-primary">
                  Health & Wellbeing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-accent-foreground/80">
                  Explore resources related to physical health, mental
                  wellbeing, nutrition, sleep, and more for neurodivergent
                  children and their families.
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <span className="text-primary hover:underline font-medium">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          </Card>
        </section>

        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <Link
            href="/contact"
            className="text-primary hover:underline font-semibold"
          >
            Have a resource suggestion or correction? Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
