import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const initialCart = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    initialCart ? JSON.parse(initialCart) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book) => {
    const existingItem = cartItems.find((item) => item._id === book._id);
    if (existingItem) {
      if (existingItem.quantity >= book.availableQuantity) {
        toast.error("You cannot add more of this item.");
        return;
      }
      setCartItems(
        cartItems.map((item) =>
          item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.success("Increased quantity in cart!");
    } else {
      if (book.availableQuantity <= 0) {
        toast.error("This item is out of stock.");
        return;
      }
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
      toast.success("Added to cart!");
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter((item) => item._id !== bookId));
    toast.success("Removed from cart");
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item._id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
