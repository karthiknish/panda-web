"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"; // Import Card components
import { Button } from "@/components/ui/button"; // Import Button
import storiesData from "@/data/stories.json"; // Import stories data

export default function PersonalStoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Personal Stories
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Read inspiring stories and experiences shared by parents, carers, and
        autistic individuals within our community. Sharing connects us.
      </motion.p>

      {/* TODO: Add a "Submit Your Story" button/link here later */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8" // Using 2 columns for potentially longer excerpts
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {storiesData.map((story, index) => (
          <motion.div
            key={story.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card">
              {/* Assuming full stories might live elsewhere or be modals later */}
              {/* For now, link might go to a placeholder or just display content */}
              <div className="flex flex-col h-full">
                {story.image && (
                  <CardHeader className="p-0">
                    <div className="relative w-full h-52">
                      {" "}
                      {/* Slightly taller image */}
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    By {story.author} | {story.date}
                  </CardDescription>
                  <p className="text-foreground/80 leading-relaxed">
                    {story.excerpt}
                  </p>
                </CardContent>
                {/* Optional Footer for a "Read More" if full stories exist */}
                {/* <CardFooter>
                  <Link href={`/stories/${story.slug}`}> // Example link structure
                    <Button variant="link" className="px-0 h-auto">Read Full Story &rarr;</Button>
                  </Link>
                </CardFooter> */}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 pt-8 border-t border-border/50 text-center">
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
