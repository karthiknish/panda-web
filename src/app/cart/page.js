"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; // Import useCart hook
import { Button } from "@/components/ui/button"; // Import Shadcn Button

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Shopping Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div
          className="text-center text-gray-600 bg-white p-8 rounded-lg shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xl mb-4">Your cart is currently empty.</p>
          <Link
            href="/shop"
            className="text-blue-600 hover:underline font-semibold"
          >
            Continue Shopping
          </Link>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white p-6 rounded-lg shadow space-y-6">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.slug}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image and Name */}
                <div className="flex items-center gap-4 flex-grow w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-semibold text-gray-800 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>

                {/* Quantity and Remove */}
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  {/* Quantity Adjuster */}
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8" // Adjust size
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </Button>
                    <span className="px-4 py-1 text-center w-12">
                      {" "}
                      {/* Adjusted padding */}
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8" // Adjust size
                      onClick={() =>
                        updateQuantity(item.slug, item.quantity + 1)
                      }
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost" // Use ghost variant for icon button
                    size="icon"
                    onClick={() => removeFromCart(item.slug)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary & Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button
              variant="link" // Use link variant
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-red-600 px-0 h-auto" // Adjust styling
            >
              Clear Cart
            </Button>
            <div className="text-right w-full sm:w-auto">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                Total: £{cartTotal.toFixed(2)}
              </p>
              {/* Use Shadcn Button, remove motion */}
              <Button
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700" // Keep custom colors if needed
                // TODO: Implement checkout process
                onClick={() =>
                  alert("Proceeding to Checkout (not implemented)")
                }
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
