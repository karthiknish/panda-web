"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components

export default function AutismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Use primary color for heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Understanding Autism: A Parent’s Guide
      </motion.h1>

      {/* Add background color to main content area */}
      <motion.div
        className="space-y-6 text-foreground bg-background p-6 md:p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-lg leading-relaxed">
          Autism is a lifelong condition that affects how a child experiences
          and interacts with the world. It is not something that can be “cured”
          or changed, but rather a unique way of thinking and processing life.
          Autism brings both challenges and strengths, and as a parent or carer,
          understanding what autism means for your child is key to supporting
          their development and well-being.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/autism/preteen-boy-holding-puzzle-jigsaw-heart-shape-chi-2025-01-09-15-06-53-utc-min.jpg"
            alt="Boy holding a heart-shaped puzzle piece"
            width={500}
            height={333} // Assuming a 3:2 aspect ratio
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Understanding Autism: A Journey of Acceptance and Support
        </h2>
        <p className="text-lg leading-relaxed">
          As a parent or family member, coming to terms with autism can be
          challenging. Let’s be honest there are so many myths and judgments
          surrounding the condition that fear is a natural response.
        </p>
        <p className="text-lg leading-relaxed">
          Unfortunately, autism is often viewed negatively. A quick search
          online may reveal websites focused on ‘treating’ or ‘reducing
          symptoms’ of autism.
        </p>
        <p className="text-lg leading-relaxed">
          At Panda Puzzle, we believe these views are deeply misguided. Autism
          is not a ‘disorder’ or ‘burden’; it is simply a difference. The
          autistic brain, like every brain, comes with its own unique strengths
          and challenges. Autistic children often excel in areas such as logical
          thinking, attention to detail, deep focus, strong memory, and creative
          or unconventional ways of thinking. Many autistic children value
          honesty and openness over small talk, and often develop a deep
          knowledge and skill in their areas of interest.
        </p>
        <p className="text-lg leading-relaxed">
          One of the greatest difficulties autistic children face is that
          society can be uncomfortable with difference. A child’s unique
          interests or behaviours may lead to judgement from others. Sensory
          differences, anxiety, or alternative ways of communicating may be
          misunderstood or even met with a lack of empathy. This often results
          in experiences that are overwhelming or distressing for the child. At
          Panda Puzzle, we are here to support parents and carers on a journey
          of understanding, helping you to embrace neurodiversity and equip you
          with the knowledge, tools, and resources you need to support your
          child.
        </p>
        <p className="text-lg leading-relaxed">
          Often challenges arise not because of autism itself, but because the
          environment around the child isn’t suited to their needs.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-600">
          “Autism + Environment = Outcome.” – Luke Beardon
        </blockquote>

        {/* Add subtle background to highlight key message */}
        <div className="bg-accent/20 p-4 rounded-md my-4">
          <p className="text-lg leading-relaxed text-accent-foreground font-medium">
            Autism describes how your child’s brain is wired, and this is
            unchangeable. But outcomes for autistic children depend largely on
            the environment they’re in. Supportive, understanding environments
            allow autistic children to thrive...
          </p>
        </div>

        <p className="text-lg leading-relaxed">
          ...focus on their strengths, and follow their passions. When a child
          struggles, it is often because the world around them hasn’t adapted to
          their needs. In the right environment, however, your child can truly
          flourish.
        </p>
        <p className="text-lg leading-relaxed">
          unchangeable. But outcomes for autistic children depend largely on the
          environment they’re in. Supportive, understanding environments allow
          autistic children to thrive, focus on their strengths, and follow
          their passions. When a child struggles, it is often because the world
          around them hasn’t adapted to their needs. In the right environment,
          however, your child can truly flourish.
        </p>
        <p className="text-lg leading-relaxed">
          At Panda Puzzle, we are committed to helping you create the best
          possible environment for your child, one where their unique strengths
          are celebrated, and their challenges are understood. We are here to
          help you along this journey, offering guidance, resources, and the
          tools to empower both you and your child.
        </p>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Understanding Autism: As a Spectrum
        </h2>
        <p className="text-lg leading-relaxed">
          Autism is often described as a spectrum condition, meaning that while
          autistic children may share certain characteristics, their needs,
          abilities, and preferences are highly individual. This diversity in
          how autism presents means that no two autistic children are the same.
          Some may excel in particular areas, such as memory, creativity, or
          attention to detail, while finding other areas like social
          communication or sensory processing more challenging.
        </p>
        <p className="text-lg leading-relaxed">
          Visualising autism as a wheel is more helpful than thinking of it as a
          sliding scale. Each child will have different strengths and needs in
          various areas, and their abilities can shift and evolve over time. One
          child might thrive in a quiet, structured environment, while another
          may seek sensory stimulation and enjoy more active settings.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/autism/neurodiversity-concept-multicolored-figures-of-th-2025-01-09-18-35-00-utc-min.jpg"
            alt="Multicolored abstract figures representing neurodiversity"
            width={500}
            height={333}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          The Importance of Environment
        </h2>
        <p className="text-lg leading-relaxed">
          Autism is a permanent part of your child’s identity, but their ability
          to thrive is strongly influenced by the environment they are in. In a
          supportive, understanding environment, autistic children can focus on
          their strengths and develop their unique skills. However, in an
          environment that doesn’t cater to their needs, they may experience
          stress, frustration, and anxiety.
        </p>
        <p className="text-lg leading-relaxed">
          It’s essential to remember that many of the challenges autistic
          children face come from environments that are not suited to their
          sensory, social, or emotional needs, rather than from autism itself.
          Creating a safe, supportive environment, whether at home, school, or
          in public spaces, can make a world of difference in helping your child
          flourish.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/autism/boy-holding-paper-homemade-garland-of-people-of-di-2025-01-07-04-43-36-utc-min.jpg"
            alt="Boy holding a paper garland showing diverse people"
            width={500}
            height={333}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Communication and Social Interaction
        </h2>
        <p className="text-lg leading-relaxed">
          Autistic children often experience the world differently when it comes
          to communication and social interaction. They may have difficulty with
          interpreting speech, body language, and social cues, but this doesn’t
          mean they aren’t interested in connecting with others. Many autistic
          children value honesty, direct communication, and meaningful
          interactions rather than small talk. Understanding and supporting
          their unique way of expressing themselves can open up new ways for
          them to build relationships and communicate.
        </p>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Sensory Processing
        </h2>
        <p className="text-lg leading-relaxed">
          Autistic children often have differences in how they process sensory
          information. Recent studies indicate that 90%-95% of autistic children
          have sensory processing difficulties. Some children may be
          hypersensitive (over-sensitive) to stimuli like loud noises, bright
          lights, or strong smells, while others may be hyposensitive
          (under-sensitive), appearing less aware of their surroundings. For
          those who are hypersensitive, environments that feel normal to others
          can become overwhelming, sometimes leading to sensory overload or
          meltdowns. For those who are hyposensitive, they may seek out sensory
          stimulation to feel balanced, often through activities like spinning,
          rocking, or making repetitive sounds, known as stimming.
        </p>
        <p className="text-lg leading-relaxed">
          Stimming is an important tool for many autistic children to help
          regulate their emotions and cope with their surroundings. It provides
          comfort and should not be discouraged unless it poses a safety risk.
        </p>
        <p className="text-lg font-semibold mt-4">
          IF YOU WOULD LIKE TO READ MORE ABOUT AUTISM, PLEASE FOLLOW THIS LINK
          AS WE HAVE WHOLE PAGE DEDICATED TO THIS AREA. –{" "}
          {/* TODO: Replace '#' with the actual link/category path */}
          <Link href="#" className="text-blue-600 hover:underline">
            Read More Here
          </Link>
        </p>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Understanding Meltdowns
        </h2>
        <p className="text-lg leading-relaxed">
          A meltdown is not a “bad behavior”; it is a child’s intense response
          to feeling overwhelmed by their environment, your child is not
          ‘naughty’. It may be triggered by sensory overload, anxiety, or
          frustration. During a meltdown, the child temporarily loses control of
          their behavior, which might manifest through shouting, crying, or
          physical actions like kicking or hitting. As a parent, it’s important
          to recognise that meltdowns are a sign of distress, not defiance, and
          they provide valuable insight into how the environment may be
          affecting your child. Try not to perceive your child as being
          ‘naughty’ see them as trying to navigate their difficulties and
          needing support to learn and make good choices.
        </p>
        <p className="text-lg leading-relaxed">
          At Panda Puzzle, we believe that behavior is a form of communication,
          not something to be labeled as challenging. Rather than focusing on
          changing the child’s behavior, we aim to understand it as a response
          to their environment and unmet needs.
        </p>
        <p className="text-lg leading-relaxed">
          Our approach emphasises learning alongside the child, ensuring that
          responses are safe, supportive, and non-challenging for both the child
          and those around them. By fostering an inclusive and empathetic
          environment, we work together to build emotional resilience and
          stronger relationships, helping children thrive in their development.
        </p>

        {/* Use secondary color for subheadings */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground">
          Focusing on Strengths
        </h2>
        <p className="text-lg leading-relaxed">
          Autistic children bring incredible strengths, such as creativity,
          problem-solving, and deep focus on areas of interest. It is important
          to nurture these strengths, while providing support in areas where
          your child may need extra help. Encouraging your child’s passions can
          lead to significant personal growth, as well as joy and confidence in
          their abilities.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/autism/top-view-of-special-kid-with-autism-among-another-2024-11-18-15-54-31-utc (1)-min.jpg"
            alt="Top view of child with autism playing with blocks among others"
            width={500}
            height={333}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Some of the most successful people in the world are Autistic.
        </p>
        <p className="text-lg leading-relaxed">
          Every autistic child is different, and your child’s potential is as
          unique as they are. By focusing on their strengths and providing the
          right support, they can thrive in ways that might surprise you.
        </p>
        <p className="text-lg leading-relaxed">
          As a parent, you play a vital role in creating an environment where
          your child can succeed. Understanding your child’s autism, advocating
          for their needs, and celebrating their unique strengths will empower
          them to embrace who they are. Remember that while autism may present
          some challenges, it also brings a different, often beautiful
          perspective on the world.
        </p>
        <p className="text-lg leading-relaxed">
          By building a world that accepts and understands autism, we can ensure
          that autistic children grow up feeling confident, capable, and valued.
          Your support and understanding will be the foundation that allows them
          to thrive.
        </p>

        {/* Add links to sub-pages */}
        {/* Use accent background for this section */}
        <section className="mt-12 pt-8 border-t border-border/50 bg-accent/20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-accent-foreground mb-6 text-center">
            Explore Further
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {" "}
            {/* Reduced gap slightly */}
            {/* Card for Signs of Autism - Use primary border */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/50 bg-card">
              {" "}
              {/* Ensure card background */}
              <Link
                href="/autism/signs-of-autism"
                className="block group h-full flex flex-col"
              >
                <CardHeader>
                  {/* Use primary color for title */}
                  <CardTitle className="text-xl text-primary group-hover:underline">
                    Does My Child Have Autism? (Signs & Characteristics)
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Learn about common signs and characteristics associated with
                    autism across different developmental stages. Includes an
                    important disclaimer.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-blue-600 hover:underline font-medium">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            </Card>
            {/* Card for Living with Autism - Use secondary border */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-secondary/50 bg-card">
              {" "}
              {/* Ensure card background */}
              <Link
                href="/autism/living-with-autism"
                className="block group h-full flex flex-col"
              >
                <CardHeader>
                  {/* Use secondary color for title */}
                  <CardTitle className="text-xl text-secondary-foreground group-hover:text-secondary">
                    Living with Autism: Daily Life & Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Explore practical strategies, insights, and tips for
                    navigating daily life, fostering independence, and
                    supporting well-being for autistic individuals and their
                    families.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-blue-600 hover:underline font-medium">
                    Explore Strategies &rarr;
                  </span>
                </div>
              </Link>
            </Card>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
