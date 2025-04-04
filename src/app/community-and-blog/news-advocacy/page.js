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
  CardFooter,
} from "@/components/ui/card"; // Import Card components
import { Button } from "@/components/ui/button"; // Import Button
import newsData from "@/data/news-advocacy.json"; // Import news data

export default function NewsAdvocacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        News & Advocacy
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Stay informed on the latest developments, research findings, policy
        changes, and advocacy efforts related to autism and neurodiversity.
      </motion.p>

      <motion.div
        className="space-y-6" // Use space-y for vertical list
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {newsData.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
          >
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>
                  {item.date} | Source: {item.source}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{item.summary}</p>
              </CardContent>
              {item.link && item.link !== "#" && (
                <CardFooter>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="px-0 h-auto">
                      {" "}
                      {/* Use link variant */}
                      Read More / Visit Source &rarr;
                    </Button>
                  </a>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 pt-8 border-t text-center">
        <Link
          href="/community-and-blog"
          className="text-blue-600 hover:underline font-semibold"
        >
          &larr; Back to Community & Blog
        </Link>
      </div>
    </div>
  );
}
