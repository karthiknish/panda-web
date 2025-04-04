"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Terms and Conditions
      </motion.h1>

      <motion.div
        className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow" // Using prose for basic text styling
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2>Agreement to Terms</h2>
        <p>
          Welcome to Panda Puzzle. These Terms and Conditions constitute a
          legally binding agreement made between you, whether personally or on
          behalf of an entity (“you”) and Panda Puzzle (“we,” “us” or “our”),
          concerning your access to and use of the [Your Website URL] website as
          well as any other media form, media channel, mobile website or mobile
          application related, linked, or otherwise connected thereto
          (collectively, the “Site”).
        </p>
        <p>
          You agree that by accessing the Site, you have read, understood, and
          agree to be bound by all of these Terms and Conditions. If you do not
          agree with all of these Terms and Conditions, then you are expressly
          prohibited from using the Site and you must discontinue use
          immediately.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”) and the trademarks, service marks, and
          logos contained therein (the “Marks”) are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws and
          various other intellectual property rights and unfair competition laws
          of the United States, foreign jurisdictions, and international
          conventions.
        </p>

        <h2>User Representations</h2>
        <p>
          By using the Site, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary... [Add
          more representations as needed]
        </p>

        <h2>Prohibited Activities</h2>
        <p>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p>
          As a user of the Site, you agree not to... [List prohibited
          activities, e.g., systematically retrieve data, trick/defraud,
          interfere with security features, disparage/harm, use support agents
          improperly, engage in unauthorized framing/linking, upload viruses,
          etc.]
        </p>

        <h2>User Generated Contributions</h2>
        <p>
          The Site may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions")... [Detail terms regarding contributions, licenses
          granted, guidelines, etc.]
        </p>

        <h2>Site Management</h2>
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the Site
          for violations of these Terms and Conditions; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Terms and Conditions... [Add more management rights]
        </p>

        <h2>Term and Termination</h2>
        <p>
          These Terms and Conditions shall remain in full force and effect while
          you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
          AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
          WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
          (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
          REASON OR FOR NO REASON... [Detail termination clauses]
        </p>

        <h2>Modifications and Interruptions</h2>
        <p>
          We reserve the right to change, modify, or remove the contents of the
          Site at any time or for any reason at our sole discretion without
          notice. We also reserve the right to modify or discontinue all or part
          of the Site without notice at any time. We will not be liable to you
          or any third party for any modification, price change, suspension, or
          discontinuance of the Site.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions and your use of the Site are governed by
          and construed in accordance with the laws of [Your State/Country]
          applicable to agreements made and to be entirely performed within
          [Your State/Country], without regard to its conflict of law
          principles.
        </p>

        <h2>Disclaimer</h2>
        <p>
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
          RISK... [Include full disclaimer]
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES... [Include full
          limitation of liability]
        </p>

        <h2>Contact Us</h2>
        <p>
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us using
          the details on our <Link href="/contact">Contact Us</Link> page.
        </p>

        <p className="text-sm text-gray-500 mt-8">Last updated: [Date]</p>
      </motion.div>
    </div>
  );
}
