"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"; // Import Separator
import { cn } from "@/lib/utils"; // Utility for combining class names

// Reusable ListItem component for NavigationMenu
const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

// Navigation data structure
const navItems = [
  {
    title: "About",
    href: "/about",
    subItems: [
      {
        title: "About Panda Puzzle",
        href: "/about",
        description: "Learn about our story and team.",
      },
      {
        title: "Mission & Values",
        href: "/about/mission-values",
        description: "Discover the principles that guide us.",
      },
    ],
  },
  {
    title: "Autism & Neurodiversity",
    href: "/autism-and-neurodiversity",
    subItems: [
      {
        title: "Overview",
        href: "/autism-and-neurodiversity",
        description: "Start here to explore resources.",
      },
      {
        title: "Understanding Autism",
        href: "/autism",
        description: "A parent's guide to autism.",
      },
      {
        title: "Signs of Autism",
        href: "/autism/signs-of-autism",
        description: "Recognizing characteristics (includes disclaimer).",
      },
      {
        title: "Living with Autism",
        href: "/autism/living-with-autism",
        description: "Daily life strategies and insights.",
      },
      {
        title: "What is Neurodiversity?",
        href: "/neurodiversity",
        description: "Understanding brain differences.",
      },
      {
        title: "Sensory & Response Detective",
        href: "/sensory-detective",
        description: "Interpreting behaviour as communication.",
      },
      {
        title: "Responses vs. Behaviours",
        href: "/understanding-responses",
        description: "Why framing matters.",
      },
    ],
  },
  { title: "Support & Resources", href: "/support-and-resources" },
  { title: "Education & Legal", href: "/education-and-legal" },
  {
    title: "Community & Blog",
    href: "/community-and-blog",
    subItems: [
      {
        title: "Blog & Forum",
        href: "/community-and-blog",
        description: "Read articles and connect with others.",
      },
      {
        title: "Upcoming Events",
        href: "/community-and-blog/events",
        description: "Find workshops, meetups, and more.",
      },
      {
        title: "News & Advocacy",
        href: "/community-and-blog/news-advocacy",
        description: "Latest news and advocacy efforts.",
      },
    ],
  },
  { title: "Shop", href: "/shop" },
];

export default function Header() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 h-20" // Adjusted height
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Panda Puzzle</span>
            <div className="flex items-center gap-2">
              <Image
                className="h-16 w-auto" // Adjusted size
                src="/assets/logo.png"
                alt="Panda Puzzle"
                width={64} // Adjusted size
                height={64} // Adjusted size
                priority
              />
              {/* Optional: Add text logo for smaller screens if needed */}
              {/* <span className="font-bold text-lg hidden sm:inline">Panda Puzzle</span> */}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side icons/buttons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Cart Icon */}
          {/* Use text-primary for hover */}
          <Link
            href="/cart"
            className="flex items-center gap-1 text-foreground hover:text-primary relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Shopping Cart</span>
          </Link>

          {/* Contact Button (Desktop) */}
          {/* Use primary color directly */}
          <div className="hidden lg:flex">
            <Link href="/contact" legacyBehavior passHref>
              <Button>
                {" "}
                {/* Defaults to primary */}
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <React.Fragment key={item.title}>
                    {item.subItems ? (
                      <div className="flex flex-col space-y-1">
                        {/* Make top-level item clickable */}
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="text-sm font-medium py-2 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                        <div className="pl-4 flex flex-col space-y-1">
                          {item.subItems.map((subItem) => (
                            <SheetClose asChild key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="text-sm text-muted-foreground py-1 hover:text-primary" // Keep hover:text-primary
                              >
                                {subItem.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="text-sm font-medium py-2 hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    )}
                    <Separator />
                  </React.Fragment>
                ))}
                {/* Add Contact Us to mobile menu */}
                {/* Use Button for consistency */}
                <SheetClose asChild>
                  <Link href="/contact" className="block pt-2">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
