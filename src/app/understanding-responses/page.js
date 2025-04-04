"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component
import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/button"; // Import Button

export default function UnderstandingResponsesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Use primary color for heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Understanding Responses vs. Behaviours
      </motion.h1>

      {/* Add background color to main content area, increase spacing */}
      <motion.div
        className="space-y-8 text-foreground bg-background p-6 md:p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-lg leading-relaxed">
          Children with autism, sensory processing challenges, or learning
          disabilities may exhibit a wide variety of responses to different
          stimuli or situations. These responses can vary greatly from one child
          to another, and they are often ways the child communicates their
          needs, manages sensory input, or navigates cognitive challenges. Here
          are some examples of responses that might be seen in these children:
        </p>

        {/* Section 1: Sensory Processing Responses - Add accent background */}
        <section className="bg-accent/20 p-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-accent-foreground">
            1. Sensory Processing Responses
          </h2>
          <p className="text-lg leading-relaxed">
            Children with sensory processing differences might be highly
            sensitive to or seek out certain sensory experiences. Their
            responses are often their way of managing sensory input.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Response to loud noises:</strong> A child might cover
              their ears, scream, or attempt to leave a noisy environment. This
              is a response to auditory overload, indicating discomfort or pain
              from sounds that might be too intense for them.
            </li>
            <li>
              <strong>Response to touch:</strong> Some children may withdraw,
              flinch, or become upset when touched unexpectedly. This could be a
              response to tactile sensitivity, where certain textures or
              physical contact feel overwhelming or unpleasant.
            </li>
            <li>
              <strong>Sensory seeking behaviours:</strong> A child might engage
              in behaviors like spinning, jumping, or running, which are ways
              they seek out sensory input to regulate their body. These
              responses help them feel more grounded or calm in overstimulating
              environments.
            </li>
            <li>
              <strong>Avoidance of certain textures or lights:</strong> A child
              may avoid certain foods because of their texture or cover their
              eyes in response to bright lights. These responses reflect their
              need to manage sensory input in a way that feels comfortable to
              them.
            </li>
          </ul>
        </section>

        {/* Section 2: Communication-Related Responses - Add secondary background */}
        <section className="bg-secondary/10 p-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
            2. Communication-Related Responses
          </h2>
          <p className="text-lg leading-relaxed">
            Many children with autism or learning disabilities may have
            difficulty with verbal communication and express their thoughts,
            needs, or emotions through other means.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Echolalia (repeating words or phrases):</strong> A child
              might repeat phrases they’ve heard, either as a way to communicate
              or to self-regulate when anxious or excited. This response can be
              misunderstood as a lack of understanding, but it can serve as a
              meaningful form of communication for the child.
            </li>
            <li>
              <strong>Non-verbal communication:</strong> A child may point, use
              gestures, or guide an adult’s hand to an object they want. This is
              a response to their difficulty with spoken language, but it shows
              they are still trying to communicate their needs.
            </li>
            <li>
              <strong>Meltdowns:</strong> When overwhelmed, a child might cry,
              scream, or have a physical outburst. This response is not about
              misbehavior but is often due to frustration, sensory overload, or
              an inability to communicate what they are feeling or needing.
            </li>
            <li>
              <strong>Selective mutism:</strong> In certain settings or with
              specific people, a child may not speak at all, even if they are
              verbal in other situations. This is a response to anxiety or
              stress, often in unfamiliar or overwhelming environments.
            </li>
          </ul>
        </section>

        {/* Section 3: Cognitive and Learning Disability Responses - Add accent background */}
        <section className="bg-accent/20 p-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-accent-foreground">
            3. Cognitive and Learning Disability Responses
          </h2>
          <p className="text-lg leading-relaxed">
            Children with learning disabilities might respond differently to
            academic tasks or challenging cognitive demands, often due to
            difficulties in processing information.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Difficulty following instructions:</strong> A child may
              appear to ignore or struggle to follow multi-step directions, not
              because of defiance, but due to difficulty processing the
              information. Their response might be to look confused, hesitate,
              or ask for clarification repeatedly.
            </li>
            <li>
              <strong>Task avoidance:</strong> A child may refuse to engage with
              certain tasks, especially those that require significant cognitive
              effort, such as reading, writing, or math. This response may
              reflect frustration, anxiety, or feelings of inadequacy related to
              their learning difficulties.
            </li>
            <li>
              <strong>Slow to complete tasks:</strong> A child may take longer
              to finish assignments or activities. This is often a response to
              the need for extra time to process instructions or to organize
              their thoughts, not laziness or disinterest.
            </li>
            <li>
              <strong>Difficulty with transitions:</strong> A child might become
              anxious, resist, or act out when moving from one activity to
              another, especially if they are deeply focused on something. This
              is a common response to the challenge of switching attention or
              adapting to changes in routine.
            </li>
          </ul>
        </section>

        {/* Section 4: Social and Emotional Responses - Add secondary background */}
        <section className="bg-secondary/10 p-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
            4. Social and Emotional Responses
          </h2>
          <p className="text-lg leading-relaxed">
            Children with autism or learning disabilities might respond to
            social situations in ways that reflect their challenges with social
            communication or emotional regulation.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Difficulty understanding social cues:</strong> A child
              might respond in ways that seem out of place in social situations,
              such as laughing during serious moments or failing to recognize
              when someone is upset. This is a response to challenges in reading
              non-verbal cues like facial expressions or tone of voice.
            </li>
            <li>
              <strong>Social withdrawal:</strong> A child might avoid group
              activities or prefer to play alone. This response can be a way of
              coping with overwhelming social interactions, especially if the
              child finds it difficult to navigate social norms or expectations.
            </li>
            <li>
              <strong>Anxiety or rigidity in routines:</strong> A child may
              respond with anxiety or upset when their routine is disrupted.
              This could involve repetitive questioning, seeking reassurance, or
              having a meltdown if things don’t go as expected. This response is
              often linked to a need for predictability and control in their
              environment.
            </li>
            <li>
              <strong>Over-excitement or “hyper” behaviors:</strong> A child may
              become very energetic or “hyper” in response to excitement or
              social situations. This can be a response to emotional overload,
              where the child is trying to process and express their feelings.
            </li>
          </ul>
        </section>

        {/* Section 5: Repetitive Responses - Add accent background */}
        <section className="bg-accent/20 p-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-accent-foreground">
            5. Repetitive Responses
          </h2>
          <p className="text-lg leading-relaxed">
            Many children with autism display repetitive behaviours or
            responses, known as “stimming,” which help them self-regulate or
            provide comfort.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
            <li>
              <strong>Hand-flapping or finger-flicking:</strong> This response
              is often seen when a child is excited, anxious, or trying to calm
              themselves. It’s a form of sensory regulation.
            </li>
            <li>
              <strong>Rocking back and forth:</strong> This rhythmic movement is
              another self-soothing response that helps a child deal with
              sensory or emotional overload.
            </li>
            <li>
              <strong>Repeating routines or rituals:</strong> A child may insist
              on doing things in a specific order or way, such as always wearing
              the same clothes or arranging toys in a particular pattern. This
              response helps them create predictability and control in their
              environment.
            </li>
          </ul>
        </section>

        {/* Conclusion Section - Add primary border */}
        <section className="mt-8 pt-6 border-t border-primary/50">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed">
            The responses seen in children with autism, sensory processing
            challenges, or learning disabilities are often ways for them to
            communicate or cope with their environment. These responses provide
            valuable insight into their needs, sensitivities, and the challenges
            they face. Rather than seeing these responses as problematic
            behaviours, it’s essential to understand their root causes and
            provide the appropriate accommodations or supports to help the child
            thrive.
          </p>
        </section>

        {/* Shift from Behaviour to Responses Section - Add secondary background */}
        <section className="bg-secondary/10 p-6 rounded-md mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
            Why We Should Shift from “Behaviour” to “Responses”
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            As parents and caregivers of children with autism, sensory
            processing differences, or learning disabilities, we understand that
            how we describe and approach our children’s actions deeply impacts
            the way we support them. A growing perspective suggests that
            replacing the term “behaviour” with “responses” can lead to more
            compassionate, effective, and understanding support. Here’s why this
            shift is important:
          </p>

          {/* TODO: Add image here if possible: https://elements.envato.com/boy-feels-sad-after-the-parents-scold-him-AYNANGL */}
          {/* <div className="my-8 flex justify-center"> ... Image ... </div> */}

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                1. Understanding, Not Judgement
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  The term “behaviour” often implies something that needs to be
                  corrected or managed. In contrast, “responses” frame a child’s
                  actions as their natural way of interacting with and reacting
                  to their world.
                </li>
                <li>
                  Viewing these actions as “responses” encourages us to
                  understand the underlying reasons behind them, rather than
                  simply trying to stop them.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                2. Recognising Responses as Communication
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  Children with autism or disabilities often communicate through
                  their responses. For example, what might be seen as “bad
                  behaviour” (like a meltdown) could be a way of expressing
                  frustration, discomfort, or sensory overload.
                </li>
                <li>
                  Shifting to the term “responses” helps parents recognise that
                  these are meaningful expressions of what their child is
                  experiencing or feeling.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                3. Promoting a Strengths-Based Approach
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  Reframing behaviours as responses highlights a child’s
                  strengths and coping strategies, such as sensory-seeking
                  actions or routine-building, rather than focusing on perceived
                  deficits.
                </li>
                <li>
                  This perspective helps parents support their child in finding
                  positive ways to manage their unique needs rather than seeing
                  their responses as something “wrong.”
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                4. Reducing Stigma
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  When we label certain actions as “problematic behaviour,” or
                  “challenging behaviour” we may unintentionally stigmatise the
                  child. The word “responses” is a neutral term, helping reduce
                  negative perceptions.
                </li>
                <li>
                  By embracing this shift, parents can foster a more positive
                  and accepting environment for their child, free from the
                  negative connotations often associated with behavior labels.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                5. Focusing on the Environment
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  Responses often reflect a child’s reaction to their
                  environment. For example, sensory overload or transitions can
                  trigger responses that appear challenging.
                </li>
                <li>
                  By focusing on the environment and triggers, parents can adapt
                  surroundings and routines to better support their child’s
                  needs rather than focusing solely on altering the child’s
                  actions.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                6. Empowering Parents and Children
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  Understanding a child’s actions as responses fosters
                  empowerment. Parents can feel more equipped to meet their
                  child where they are, helping them navigate their world with
                  compassion and insight.
                </li>
                <li>
                  This approach also empowers children by validating their
                  experiences and giving them the support they need to respond
                  to their environment in a way that works for them.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                Practical Steps for Parents:
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-lg">
                <li>
                  <strong>Observe your child’s responses:</strong> What are they
                  responding to? What needs or emotions might they be
                  communicating?
                </li>
                <li>
                  <strong>Adapt the environment:</strong> Modify sensory inputs,
                  create routines, and provide tools that help your child feel
                  comfortable and secure.
                </li>
                <li>
                  <strong>Support self-regulation:</strong> Encourage responses
                  that help your child manage their world, such as stimming,
                  sensory breaks, or verbal affirmations.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed mt-6">
            This shift from “behaviour” to “responses” is a small but meaningful
            change that promotes understanding, compassion, and better outcomes
            for both parents and children. Embracing this language allows
            parents to better support their children in navigating the world on
            their own terms, helping them thrive.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
