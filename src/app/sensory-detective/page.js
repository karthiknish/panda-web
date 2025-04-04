"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

export default function SensoryDetectivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Use primary color for heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Understanding Behaviour as Communication: Becoming a Sensory and
        Response Detective
      </motion.h1>

      {/* Add background color to main content area */}
      <motion.div
        className="space-y-6 text-foreground bg-background p-6 md:p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Add an introductory visual element if desired */}
        {/* <div className="flex justify-center mb-6"> ... Image or SVG ... </div> */}

        <p className="text-lg leading-relaxed">
          At Panda Puzzle, we understand that many behaviours are often
          responses to sensory or environmental challenges, which can affect a
          child’s ability to communicate and connect with those around them. To
          better support children, we need to become both behaviour and sensory
          detectives. By recognising the impact of sensory difficulties, we can
          help create a more comfortable environment that encourages
          communication and learning.
        </p>
        <p className="text-lg leading-relaxed">
          Let’s take a moment to imagine our own sensory differences or
          difficulties and how they might clash with our child’s needs. For
          example, you might enjoy a loud radio in the car, but your child could
          be sensitive to noise, finding it overwhelming. Or, while you love the
          smell of a pack of crisps, your child might be repelled by the strong
          scent and want to get as far away as possible. Understanding these
          differences helps us make small adjustments, like lowering the volume
          or choosing a different snack, to create a more comfortable and
          supportive space for both parent and child.
        </p>
        <p className="text-lg leading-relaxed">
          On the other hand, some children are sensory seekers. They might wake
          up needing to climb on furniture or go outside to burn off energy. If
          this sounds like your child, they may need some sensory input to
          regulate before starting their day. A simple game, like “Row, Row, Row
          Your Boat” before breakfast, can offer the physical movement they need
          to feel centred and prepared for their journey to school.
        </p>
        <p className="text-lg leading-relaxed">
          As we begin our journey as sensory detectives, it’s important to look
          deeper when our child becomes distressed or agitated. Instead of
          viewing it as “acting out,” consider what sensory or emotional needs
          they may be expressing. Are they overwhelmed by noise, uncomfortable
          with a texture, or seeking movement? By tuning into these clues, we
          can better understand their sensory world and help them feel more at
          ease.
        </p>

        {/* Add a concluding visual element or call to action */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-lg font-semibold text-secondary-foreground mb-4">
            Ready to explore specific responses?
          </p>
          <Link href="/understanding-responses">
            <Button variant="secondary">
              Understanding Responses vs. Behaviours
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
