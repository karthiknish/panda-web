"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial render (optional persistence)
  useEffect(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.error("Stored cart is not an array:", parsedCart);
          localStorage.removeItem("shoppingCart"); // Clear invalid data
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        localStorage.removeItem("shoppingCart"); // Clear corrupted data
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes (optional persistence)
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    } else {
      // If cart is empty, remove item from localStorage to avoid storing '[]'
      localStorage.removeItem("shoppingCart");
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.slug === product.slug);
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity }];
      }
    });
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    // Optionally show a notification to the user
  };

  const removeFromCart = (slug) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
    console.log(`Removed item with slug ${slug} from cart.`);
  };

  const updateQuantity = (slug, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(
        (item) =>
          item.slug === slug
            ? { ...item, quantity: Math.max(1, quantity) }
            : item // Ensure quantity is at least 1
      )
    );
    console.log(`Updated quantity for slug ${slug} to ${quantity}.`);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("shoppingCart"); // Clear persistence
    console.log("Cart cleared.");
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const cartTotal = cartItems.reduce((total, item) => {
    // Remove currency symbol and convert price to number
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
