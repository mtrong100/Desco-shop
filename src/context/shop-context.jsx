import React, { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

const ShopContext = createContext();

function ShopProvider(props) {
  const { storedValue, setValue } = useLocalStorage("products", PRODUCTS);
  const { storedValue: storedCartLocal, setValue: setStoredCartLocal } =
    useLocalStorage("cartItems", []);
  const { storedValue: storedPriceLocal, setValue: setStoredPriceLocal } =
    useLocalStorage("price", 0);

  const [products, setProducts] = useState(storedValue);
  const [total, setTotal] = useState(storedPriceLocal);
  const [cartItem, setCartItem] = useState(storedCartLocal);

  /* display heart color when click at specific product */
  function toggleFavorite(productId) {
    const updatedArray = products.map((item) => {
      if (item.id === productId) {
        return { ...item, isFavorite: (item.isFavorite = true) };
      }
      return item;
    });
    setProducts(updatedArray);
    setValue(updatedArray);
  }

  /* add product to your cart */
  function addToCart(productItem) {
    const isExisted = cartItem.find((item) => item.id === productItem.id);
    if (isExisted) {
      const newCart = cartItem.map((item) =>
        item.id === productItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItem(newCart);
      setStoredCartLocal(newCart);
    } else {
      const newCart = [...cartItem, { ...productItem }];
      setCartItem(newCart);
      setStoredCartLocal(newCart);
    }
    const newTotal = total + productItem.price;
    setTotal(newTotal);
    setStoredPriceLocal(newTotal);
  }

  /* remove product from your cart */
  function removeFromCart(productItem) {
    const updatedCart = cartItem.filter((item) => item.id !== productItem.id);
    setCartItem(updatedCart);
    setStoredCartLocal(updatedCart);
    /* ============================================= */
    /* update price after remove product out of cart */
    const updatedPrice = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(updatedPrice);
    setStoredPriceLocal(updatedPrice);
  }

  /* increase the amount of product in your cart */
  function handleIncreaseQuantity(productItem) {
    const newCart = cartItem.map((item) =>
      item.id === productItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItem(newCart);
    setStoredCartLocal(newCart);
    const newTotal = total + productItem.price;
    setTotal(newTotal);
    setStoredPriceLocal(newTotal);
  }

  /* decrease the amount of product in your cart */
  function handleDecreaseQuantity(productItem) {
    const isExisted = cartItem.find((item) => item.id === productItem.id);
    if (isExisted.quantity === 1) {
      const newCart = cartItem.filter((item) => item.id !== productItem.id);
      setCartItem(newCart);
      setStoredCartLocal(newCart);
    } else {
      const newCart = cartItem.map((item) =>
        item.id === productItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItem(newCart);
      setStoredCartLocal(newCart);
    }
    const newTotal = total - productItem.price;
    setTotal(newTotal);
    setStoredPriceLocal(newTotal);
  }

  /* clear all products in your cart */
  function clearCart() {
    setCartItem([]);
    setStoredCartLocal([]);
    setTotal(0);
    setStoredPriceLocal(0);
  }

  /* create value to pass as props */
  const value = {
    products,
    cartItem,
    setProducts,
    setCartItem,
    toggleFavorite,
    removeFromCart,
    addToCart,
    clearCart,
    total,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };

  return <ShopContext.Provider value={value} {...props}></ShopContext.Provider>;
}

function useShop() {
  const context = useContext(ShopContext);
  if (typeof context === "undefined")
    throw new Error("useShop must be used within ShopProvider");
  return context;
}

export { useShop, ShopProvider };
