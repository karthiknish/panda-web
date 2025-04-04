"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component in case we add images later

export default function NeurodiversityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Use primary color for heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What is Neurodiversity?
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
          Just as people have different skin tones, hair types, and eye colours,
          the way our brains function also varies widely. This variety in how
          people think and process the world is what we refer to as
          neurodiversity. While all brains are unique, roughly 20% of the
          population is neurodivergent, meaning their brains work in ways that
          differ from the typical or "neurotypical" standards. Neurodivergence
          includes conditions like Autism, ADHD, dyspraxia, and Tourette’s
          Syndrome, each contributing to diverse ways of thinking and
          interacting with the world.
        </p>
        <p className="text-lg leading-relaxed">
          Neurodiversity is an essential part of human diversity. Just as
          society benefits from different physical traits and cultural
          backgrounds, it also thrives on diverse perspectives and approaches to
          thinking. Having a wide range of cognitive styles encourages
          creativity, problem-solving, and innovation. Imagine how much less
          interesting and dynamic the world would be if everyone thought the
          same way. Being different, in this sense, brings richness and beauty
          to our communities.
        </p>
        <p className="text-lg leading-relaxed">
          However, being neurodivergent can also mean facing certain challenges
          in environments designed for neurotypical people. Tasks that others
          find simple might be more difficult, but with the right support,
          neurodivergent individuals can fully harness their unique strengths.
          Whether it’s thinking outside the box, being highly creative, or
          approaching problems from new angles, these differences in thinking
          can be a huge asset to society.
        </p>
        <p className="text-lg leading-relaxed">
          Ultimately, understanding neurodiversity is about recognising that
          there is no one "right" way to think or experience the world. Every
          brain is different, and these differences should be appreciated and
          embraced. By supporting neurodivergent individuals and valuing their
          contributions, we can create a more inclusive and innovative
          society—one where diversity is truly celebrated in all its forms.
        </p>

        {/* Add a concluding visual element or call to action */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-lg font-semibold text-secondary-foreground mb-4">
            Embrace the Spectrum!
          </p>
          <Link href="/autism-and-neurodiversity">
            <Button variant="secondary">Explore More Resources</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
