"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Panda Puzzle</span>
            <div className="flex items-center gap-2">
              <Image
                className="h-24 w-auto"
                src="/assets/logo.png"
                alt="Panda Puzzle"
                width={96}
                height={96}
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex gap-8">
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            href="/autism-and-neurodiversity"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Autism and Neurodiversity
          </Link>
          <Link
            href="/support-and-resources"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Support and Resources
          </Link>
          <Link
            href="/education-and-legal"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Education and Legal
          </Link>
          <Link
            href="/community-and-blog"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Community & Blog
          </Link>
          <Link
            href="/shop"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Shop
          </Link>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 px-4 py-2 bg-[#FF7F50] text-white rounded-md hover:bg-[#FF7F50]/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
