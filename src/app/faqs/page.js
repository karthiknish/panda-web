"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components
import faqData from "@/data/faqs.json"; // Import FAQ data

export default function FaqsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div
        className="bg-background p-6 md:p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faqItem) => (
            <AccordionItem
              key={faqItem.id}
              value={faqItem.id}
              className="border-b border-border/50 px-4 rounded-md bg-card shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-secondary-foreground">
                {faqItem.question}
              </AccordionTrigger>
              <AccordionContent className="text-md text-foreground/80 pt-2">
                {faqItem.answer}
                {/* Optionally add links within answers if needed */}
                {faqItem.id === "faq-3" && (
                  <>
                    {" "}
                    <Link
                      href="/neurodiversity"
                      className="text-primary hover:underline"
                    >
                      Learn more here.
                    </Link>
                  </>
                )}
                {faqItem.id === "faq-5" && (
                  <>
                    {" "}
                    Explore our sections on{" "}
                    <Link
                      href="/sensory-detective"
                      className="text-primary hover:underline"
                    >
                      'Becoming a Sensory & Response Detective'
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/understanding-responses"
                      className="text-primary hover:underline"
                    >
                      'Understanding Responses vs. Behaviours'
                    </Link>{" "}
                    for more insights.
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="mb-2 text-lg">Can't find your question?</p>
          <Link
            href="/contact"
            className="text-primary hover:underline font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
