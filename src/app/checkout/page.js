"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // ** THIS IS A PLACEHOLDER - NO ACTUAL ORDER IS PROCESSED **
    console.log("Placing order with items:", cartItems);
    alert("Order Placed (Simulation)! Thank you for your purchase.");
    clearCart(); // Clear the cart after simulated order
    // Redirect to a success page or home page (optional)
    // window.location.href = '/order-success';
  };

  // Redirect to cart if empty
  if (cartItems.length === 0 && typeof window !== "undefined") {
    // Add check for window to avoid SSR issues
    window.location.href = "/cart";
    return (
      <p className="text-center p-10">Your cart is empty. Redirecting...</p>
    ); // Placeholder while redirecting
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {" "}
      {/* Wider container */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Checkout
      </motion.h1>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Shipping & Payment Details Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address2">Address 2 (Optional)</Label>
                  <Input id="address2" placeholder="Apartment, suite, etc." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Anytown" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" placeholder="CA" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input id="zip" placeholder="90210" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="United States" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="For delivery updates"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Details Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Payment gateway integration (e.g., Stripe, PayPal) would go
                  here. This is currently a placeholder.
                </p>
                {/* Placeholder for credit card form elements */}
                <div className="mt-4 p-4 border border-dashed rounded text-center text-muted-foreground">
                  [ Secure Payment Form Placeholder ]
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.slug}
                    className="flex justify-between items-center text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                    </div>
                    <span>
                      {(
                        parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>{" "}
                  {/* Or Free Shipping / Flat Rate */}
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>£{cartTotal.toFixed(2)}</span>{" "}
                  {/* Update if shipping is added */}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  Place Order (Simulation)
                </Button>
              </CardFooter>
            </Card>
            <div className="mt-4 text-center">
              <Link
                href="/cart"
                className="text-sm text-blue-600 hover:underline"
              >
                &larr; Back to Cart
              </Link>
            </div>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
