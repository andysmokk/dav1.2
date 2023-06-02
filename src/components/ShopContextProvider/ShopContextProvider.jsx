import React from "react";
import { createContext, useState, useEffect } from "react";
import api from "../../services/shopsAPI";

export const ShopContext = createContext({
  shops: [],
  products: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const ShopContextProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const shops = await api.getShops();
      setShops(shops.data);
    };

    fetchShops();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await api.getProducts();
      setProducts(products.data);
    };

    fetchProducts();
  }, []);

  const addProductToCart = () => {};

  const removeProductFromCart = () => {};

  return (
    <ShopContext.Provider
      value={{
        shops,
        products,
        addProductToCart,
        removeProductFromCart,
        cart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
