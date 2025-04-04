"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow" // Using prose for basic text styling
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2>Introduction</h2>
        <p>
          Welcome to Panda Puzzle's Privacy Policy. We are committed to
          protecting your personal information and your right to privacy. If you
          have any questions or concerns about our policy, or our practices with
          regards to your personal information, please contact us.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the website, express an interest in obtaining
          information about us or our products and services, when you
          participate in activities on the website (such as posting messages in
          our online forums or entering competitions, contests or giveaways) or
          otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the website, the choices you make and
          the products and features you use. The personal information we collect
          may include the following: Name and Contact Data, Credentials, Payment
          Data (handled by third-party processors), etc.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To post testimonials.</li>
          <li>Request feedback.</li>
          <li>To enable user-to-user communications.</li>
          <li>To manage user accounts.</li>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>
            To enforce our terms, conditions and policies for business purposes,
            to comply with legal and regulatory requirements or in connection
            with our contract.
          </li>
          <li>To respond to legal requests and prevent harm.</li>
          <li>Fulfill and manage your orders.</li>
          {/* Add more points as needed */}
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill
          business obligations.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Policy (link to be added).
        </p>

        <h2>Data Retention</h2>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy policy, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements).
        </p>

        <h2>Your Privacy Rights</h2>
        <p>
          In some regions (like the EEA and UK), you have certain rights under
          applicable data protection laws. These may include the right (i) to
          request access and obtain a copy of your personal information, (ii) to
          request rectification or erasure; (iii) to restrict the processing of
          your personal information; and (iv) if applicable, to data
          portability. In certain circumstances, you may also have the right to
          object to the processing of your personal information.
        </p>

        <h2>Policy Updates</h2>
        <p>
          We may update this privacy policy from time to time. The updated
          version will be indicated by an updated “Revised” date and the updated
          version will be effective as soon as it is accessible.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may contact
          us using the details on our <Link href="/contact">Contact Us</Link>{" "}
          page.
        </p>

        <p className="text-sm text-gray-500 mt-8">Last updated: [Date]</p>
      </motion.div>
    </div>
  );
}
