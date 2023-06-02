import React from "react";
import { createContext, useState, useEffect } from "react";
import api from "../../services/shopsAPI";

export const ShopContext = createContext({
  shops: [],
  shopId: "",
  products: [],
  productsOfCurrentShop: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const ShopContextProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [shopId, setShopId] = useState("");
  const [products, setProducts] = useState([]);
  const [productsOfCurrentShop, setProductsOfCurrentShop] = useState([]);
  console.log(
    "🚀 ~ file: ShopContextProvider.jsx:20 ~ ShopContextProvider ~ productsOfCurrentShop:",
    productsOfCurrentShop
  );
  const [cart, setCart] = useState([]);
  console.log(
    "🚀 ~ file: ShopContextProvider.jsx:30 ~ ShopContextProvider ~ cart:",
    cart
  );

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

  useEffect(() => {
    setProductsOfCurrentShop(
      products.filter((product) => product.idShop === shopId)
    );
  }, [products, shopId]);

  const currentShopId = (idShop) => setShopId(idShop);

  const addProductToCart = (idProduct) => {
    let currentCart = [];
    const currentProduct = productsOfCurrentShop.find(
      (product) => product.id === idProduct
    );

    // currentCart = [...cart, currentProduct];

    // setCart(currentCart);
    const indexProductOfCart = cart.findIndex(
      (product) => product.product.id === currentProduct.id
    );

    currentCart = [...cart];

    if (indexProductOfCart === -1) {
      currentCart = [...cart, { product: currentProduct, quantity: 1 }];
      setCart(currentCart);
    } else {
      currentCart[indexProductOfCart].quantity =
        currentCart[indexProductOfCart].quantity + 1;
      setCart(currentCart);
    }
  };

  const removeProductFromCart = (idProduct) => {
    const updatedCart = cart.filter(({ product }) => product.id !== idProduct);

    if (updatedCart) {
      setCart(updatedCart);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        shops,
        currentShopId,
        shopId,
        products,
        productsOfCurrentShop,
        addProductToCart,
        removeProductFromCart,
        cart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
