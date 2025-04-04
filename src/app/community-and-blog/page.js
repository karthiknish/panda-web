"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription, // Optional
  CardFooter, // Optional
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components
import { Button } from "@/components/ui/button"; // Import Button
import dummyPosts from "@/data/posts.json"; // Import post data from JSON file

// Dummy Blog Post Data (Remove inline definition)
/*
const dummyPosts = [
  {
    slug: "understanding-sensory-needs-at-home",
    title: "Understanding Sensory Needs at Home",
    excerpt:
      "Practical tips for creating a sensory-friendly environment in your own home to support your child's regulation and comfort.",
    image: "/assets/family.jpg", // Placeholder image
    author: "Jane Doe",
    date: "March 15, 2025",
  },
  {
    slug: "navigating-school-meetings",
    title: "Navigating School Meetings Effectively",
    excerpt:
      "How to prepare for and participate in school meetings to advocate successfully for your child's needs and accommodations.",
    image: "/assets/kid.png", // Placeholder image
    author: "John Smith",
    date: "March 28, 2025",
  },
  {
    slug: "the-power-of-visual-schedules",
    title: "The Power of Visual Schedules",
    excerpt:
      "Explore how visual schedules can reduce anxiety and increase independence for children with autism and other neurodevelopmental differences.",
    image: "/assets/feature-holding.jpg", // Placeholder image
    author: "Dr. Emily Carter",
    date: "April 02, 2025",
  },
  {
    slug: "celebrating-neurodiversity-in-play",
    title: "Celebrating Neurodiversity in Play",
    excerpt:
      "Ideas for inclusive play activities that celebrate different ways of thinking and interacting, fostering acceptance and fun.",
    image: "/assets/teddy_bears.webp", // Placeholder image
    author: "Alex Johnson",
    date: "April 04, 2025",
  },
];
*/

export default function CommunityBlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Community & Blog
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Welcome to the Panda Puzzle Community Hub! Connect with other families,
        share experiences, and find insights on our blog.
      </motion.p>

      {/* Blog Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Latest Blog Posts
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {dummyPosts.map((post, index) => (
            // Use Shadcn Card component, keep motion wrapper for animation
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col h-full"
                >
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48 bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {" "}
                      {/* Wrapper for title, meta, excerpt */}
                      <CardTitle className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                        {post.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-3">
                        By {post.author} on {post.date}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-blue-600 hover:underline font-medium self-start mt-auto">
                      {" "}
                      {/* Ensure link is at bottom */}
                      Read More &rarr;
                    </span>
                  </CardContent>
                  {/* CardFooter could go here if needed */}
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* TODO: Add pagination or "View All Posts" link if needed */}
        <div className="text-center mt-8">
          {/* Link to Events page could go here or in header */}
        </div>
      </section>

      {/* Events Link Section */}
      <section className="mb-16 text-center">
        <Link href="/community-and-blog/events">
          <Button variant="secondary" size="lg">
            View Upcoming Events
          </Button>
        </Link>
      </section>

      {/* Community Section Placeholder */}
      <section className="text-center bg-gray-100 p-8 rounded-lg shadow">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Join Our Community Forum!
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Connect with other parents and caregivers, ask questions, share
          advice, and find support in our dedicated community forum (Coming
          Soon!).
        </p>
        {/* Use Shadcn Button, remove motion */}
        <Button
          className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 cursor-not-allowed opacity-70" // Keep custom colors if needed
          disabled // Disabled until forum is ready
        >
          Forum Coming Soon
        </Button>
      </section>
    </div>
  );
}
