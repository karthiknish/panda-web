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
import eventsData from "@/data/events.json"; // Import events data

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Events
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Find workshops, meetups, conferences, and online events relevant to
        neurodiversity, parenting, and education in the UK.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {eventsData.map((event, index) => (
          <motion.div
            key={event.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>
                  {event.date} | {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
              {event.link && event.link !== "#" && (
                <CardFooter>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full" // Make link take full width for button styling
                  >
                    <Button variant="outline" className="w-full">
                      Visit Event Website
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
