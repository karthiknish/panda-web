"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import allPosts from "@/data/posts.json"; // Import post data from JSON file

// Function to find post by slug (moved up)
const getPostBySlug = (slug) => {
  return allPosts.find((p) => p.slug === slug);
};

// Dummy Blog Post Data (including full content)
// In a real app, this would likely come from a CMS or database
/* // Comment out start
const allPosts = [
  {
    slug: "understanding-sensory-needs-at-home",
    title: "Understanding Sensory Needs at Home",
    excerpt:
      "Practical tips for creating a sensory-friendly environment in your own home to support your child's regulation and comfort.",
    image: "/assets/family.jpg", // Placeholder image
    author: "Jane Doe",
    date: "March 15, 2025",
    content: `
      <p>Creating a home environment that supports your child's sensory needs doesn't have to be complicated. It's about understanding their unique profile – are they sensory seeking, sensory avoiding, or a mix of both? Once you have a better understanding, you can make small but impactful adjustments.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Reducing Overload for Sensory Avoiders</h3>
      <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Lighting:</strong> Use dimmer switches, lamps instead of overhead lighting, or blackout curtains to control light intensity.</li>
        <li><strong>Noise:</strong> Provide noise-canceling headphones, designate quiet zones, and use soft furnishings like rugs and curtains to dampen sound.</li>
        <li><strong>Smells:</strong> Opt for unscented cleaning products and detergents. Be mindful of cooking smells or perfumes that might be overwhelming.</li>
        <li><strong>Clutter:</strong> A visually cluttered space can be overwhelming. Use storage bins and try to maintain clear surfaces.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-2">Providing Input for Sensory Seekers</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Movement:</strong> Incorporate movement breaks. Consider indoor swings, mini trampolines, or wobble cushions.</li>
        <li><strong>Deep Pressure:</strong> Weighted blankets or lap pads can be calming. Offer hugs or gentle squeezes if your child enjoys them.</li>
        <li><strong>Oral Motor:</strong> Provide safe chew toys or crunchy/chewy snacks.</li>
        <li><strong>Tactile Play:</strong> Sensory bins with materials like rice, beans, or playdough can offer needed input.</li>
      </ul>
      <p>Remember, consistency and predictability are often key. Observe your child's responses and adjust accordingly. Creating a sensory-friendly home is an ongoing process of learning and adapting to best support your child's well-being.</p>
    `,
  },
  {
    slug: "navigating-school-meetings",
    title: "Navigating School Meetings Effectively",
    excerpt:
      "How to prepare for and participate in school meetings to advocate successfully for your child's needs and accommodations.",
    image: "/assets/kid.png", // Placeholder image
    author: "John Smith",
    date: "March 28, 2025",
    content: `
      <p>School meetings, whether for an IEP, 504 plan, or just a parent-teacher conference, can feel daunting. However, with preparation, they become powerful opportunities to advocate for your child. The goal is collaboration – working with the school team to ensure your child receives the support they need to succeed.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Before the Meeting</h3>
      <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Review Documents:</strong> Read any relevant reports, previous plans, or assessments beforehand.</li>
        <li><strong>Gather Information:</strong> Collect your own observations, notes from therapists, and examples of your child's strengths and challenges.</li>
        <li><strong>Define Your Goals:</strong> What are the key outcomes you want from this meeting? Prioritize your concerns.</li>
        <li><strong>Prepare Questions:</strong> Write down specific questions you want to ask.</li>
        <li><strong>Consider Bringing Support:</strong> You can bring an advocate, therapist, or another supportive person if needed (inform the school beforehand).</li>
      </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2">During the Meeting</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Stay Focused:</strong> Keep the discussion centered on your child's needs and your prepared goals.</li>
        <li><strong>Ask Questions:</strong> Don't hesitate to ask for clarification on jargon or procedures.</li>
        <li><strong>Share Your Perspective:</strong> You know your child best. Share your insights and observations calmly and clearly.</li>
        <li><strong>Take Notes:</strong> Document key decisions, action items, and timelines agreed upon.</li>
        <li><strong>Maintain a Collaborative Tone:</strong> Aim for partnership, even when disagreements arise. Frame concerns constructively.</li>
      </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2">After the Meeting</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Review Notes:</strong> Ensure your notes match your understanding of the outcomes.</li>
        <li><strong>Follow Up:</strong> Send a brief email summarizing key decisions and thanking the team. Follow up on any action items assigned to you or the school.</li>
      </ul>
      <p>Effective advocacy is about being informed, prepared, and collaborative. By approaching school meetings strategically, you can significantly impact your child's educational journey.</p>
    `,
  },
  {
    slug: "the-power-of-visual-schedules",
    title: "The Power of Visual Schedules",
    excerpt:
      "Explore how visual schedules can reduce anxiety and increase independence for children with autism and other neurodevelopmental differences.",
    image: "/assets/feature-holding.jpg", // Placeholder image
    author: "Dr. Emily Carter",
    date: "April 02, 2025",
    content: `
      <p>For many children, especially those with autism or processing differences, the world can feel unpredictable and overwhelming. Visual schedules provide a clear, concrete representation of what is happening now and what will happen next, bringing structure and predictability to their day.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Benefits of Visual Schedules</h3>
      <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Reduces Anxiety:</strong> Knowing what to expect minimizes uncertainty and the anxiety that comes with it.</li>
        <li><strong>Supports Transitions:</strong> Clearly seeing the next activity helps children mentally prepare for shifts, making transitions smoother.</li>
        <li><strong>Increases Independence:</strong> Children can refer to the schedule themselves, reducing reliance on verbal prompts.</li>
        <li><strong>Improves Understanding:</strong> Visual aids can be easier to process than spoken language for some children.</li>
        <li><strong>Builds Routine:</strong> Helps establish and reinforce daily routines.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-2">Types of Visual Schedules</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Object Schedules:</strong> Using real objects to represent activities (e.g., a cup for snack time).</li>
        <li><strong>Picture Schedules:</strong> Using photos or picture symbols (like PECS) arranged in sequence.</li>
        <li><strong>Written Schedules:</strong> For children who can read, a simple list can work well.</li>
        <li><strong>Digital Schedules:</strong> Apps on tablets or phones offer interactive options.</li>
      </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2">Implementation Tips</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Start Simple:</strong> Begin with just a few key activities.</li>
        <li><strong>Be Consistent:</strong> Use the schedule regularly throughout the day.</li>
        <li><strong>Involve Your Child:</strong> Let them help set up the schedule or move pictures as activities are completed.</li>
        <li><strong>Keep it Accessible:</strong> Place the schedule where your child can easily see and interact with it.</li>
        <li><strong>Use Clear Visuals:</strong> Ensure pictures or symbols are easily understandable.</li>
      </ul>
      <p>Visual schedules are a versatile and powerful tool. By providing structure and clarity, they empower children, reduce stress, and foster greater independence in daily life.</p>
    `,
  },
  {
    slug: "celebrating-neurodiversity-in-play",
    title: "Celebrating Neurodiversity in Play",
    excerpt:
      "Ideas for inclusive play activities that celebrate different ways of thinking and interacting, fostering acceptance and fun.",
    image: "/assets/teddy_bears.webp", // Placeholder image
    author: "Alex Johnson",
    date: "April 04, 2025",
    content: `
      <p>Play is fundamental to childhood development, offering opportunities for learning, social connection, and joy. When we approach play with neurodiversity in mind, we create spaces where all children feel valued and understood for their unique ways of interacting with the world.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Principles of Neurodiverse Play</h3>
      <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Follow the Child's Lead:</strong> Engage with their interests, even if they seem unconventional.</li>
        <li><strong>Focus on Connection, Not Correction:</strong> Prioritize enjoyment and relationship-building over teaching "correct" ways to play.</li>
        <li><strong>Respect Sensory Needs:</strong> Offer variety in textures, sounds, and movement levels. Allow for quiet spaces or stimming.</li>
        <li><strong>Adapt Activities:</strong> Modify rules or materials to suit different abilities and processing styles.</li>
        <li><strong>Embrace Different Communication Styles:</strong> Accept non-verbal cues, echolalia, or unique ways of expressing excitement or frustration.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-2">Inclusive Play Ideas</h3>
       <ul class="list-disc list-inside space-y-1 pl-4 mb-4">
        <li><strong>Sensory Bins:</strong> Fill containers with rice, water beads, sand, or pasta for tactile exploration.</li>
        <li><strong>Building Activities:</strong> Use blocks, LEGOs, magnetic tiles, or even cardboard boxes – focus on the process, not just the end product.</li>
        <li><strong>Art Exploration:</strong> Offer various materials like paint, clay, crayons, and collage items without rigid instructions.</li>
        <li><strong>Movement Games:</strong> Obstacle courses, dancing, swinging, or simple games like "Simon Says" adapted for different motor skills.</li>
        <li><strong>Parallel Play:</strong> Allow children to play alongside each other without demanding direct interaction if they prefer.</li>
        <li><strong>Shared Interests:</strong> Connect over deep dives into specific topics, whether it's dinosaurs, trains, or a particular video game.</li>
      </ul>
      <p>Celebrating neurodiversity in play means creating an environment of acceptance where differences are seen as strengths. It's about fostering joy, connection, and confidence, allowing every child to play and learn in the way that feels most authentic to them.</p>
    `,
  },
];
*/ // Comment out end

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  // If post not found, render 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-600 text-md">
            By {post.author} on {post.date}
          </p>
        </header>

        {/* Optional Featured Image */}
        {post.image && (
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed" // Using Tailwind Typography plugin classes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          // Use dangerouslySetInnerHTML for dummy HTML content
          // In a real app, use a Markdown renderer (like react-markdown) for safety
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/community-and-blog"
            className="text-blue-600 hover:underline"
          >
            &larr; Back to Community & Blog
          </Link>
        </div>
      </motion.article>
    </div>
  );
}
