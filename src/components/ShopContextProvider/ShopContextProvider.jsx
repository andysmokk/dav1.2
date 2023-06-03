import React from "react";
import { createContext, useState, useEffect } from "react";
import api from "../../services/shopsAPI";

export const ShopContext = createContext({
  shops: [],
  activeShop: [],
  products: [],
  shopId: "",
  cart: [],
  name: "",
  email: "",
  phone: "",
  address: "",
  totalPriceProducts: 0,
  productsOfCurrentShop: [],
  orderSent: Boolean,
  addProductToCart: () => {},
  changeQuantityProduct: () => {},
  removeProductFromCart: () => {},
  quantityProductsCart: () => {},
  totalQuantityProductsCart: () => {},
  submitHandler: () => {},
  onFormChange: () => {},
});

export const ShopContextProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsOfCurrentShop, setProductsOfCurrentShop] = useState([]);
  const [shopId, setShopId] = useState("");
  const [activeShop, setActiveShop] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPriceProducts, setTotalPriceProducts] = useState(0);
  const [orderSent, setOrderSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchShops = async () => {
      const shops = await api.getShops();
      setShops(shops.data);
    };

    fetchShops();
  }, []);

  const fetchProducts = async () => {
    const products = await api.getProducts();
    setProducts(products.data);
  };

  useEffect(() => {
    setProductsOfCurrentShop(
      products.filter((product) => product.idShop === shopId)
    );
  }, [products, shopId]);

  useEffect(() => {
    setUser({ name: name, phone: phone, email: email, address: address });
  }, [address, email, name, phone]);

  const currentShopId = (idShop) => {
    fetchProducts();
    setShopId(idShop);
  };

  const addProductToCart = (idProduct) => {
    let currentCart = [];
    const currentProduct = productsOfCurrentShop.find(
      (product) => product.id === idProduct
    );

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

    setActiveShop(currentProduct.idShop);
    setOrderSent(false);
  };

  const changeQuantityProduct = (id, number) => {
    let currentCart = [...cart];
    let indexProductOfCart = cart.findIndex(
      (product) => product.product.id === id
    );

    currentCart[indexProductOfCart].quantity = Number(number);

    setCart(currentCart);
  };

  const removeProductFromCart = (idProduct) => {
    const updatedCart = cart.filter(({ product }) => product.id !== idProduct);

    if (updatedCart) {
      setCart(updatedCart);
    }
  };

  const quantityProductsCart = (id) => {
    const currentProductCart = cart.find(
      (product) => product.product.id === id
    );
    return currentProductCart ? currentProductCart.quantity : 0;
  };

  const totalQuantityProductsCart = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const calcTotalPriceProduct = cart.reduce((acc, product) => {
    return (acc += product.product.price * product.quantity);
  }, 0);

  useEffect(() => {
    setTotalPriceProducts(calcTotalPriceProduct);
  }, [calcTotalPriceProduct, cart]);

  const submitHandler = (e, data, total) => {
    e.preventDefault();

    api.sendOrder({ user: user, order: data, totalPrice: total });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCart([]);

    setOrderSent(true);
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      case "address":
        setAddress(value);
        break;

      default:
        return;
    }
  };

  return (
    <ShopContext.Provider
      value={{
        shops,
        activeShop,
        products,
        currentShopId,
        shopId,
        addProductToCart,
        productsOfCurrentShop,
        changeQuantityProduct,
        removeProductFromCart,
        quantityProductsCart,
        cart,
        totalPriceProducts,
        totalQuantityProductsCart,
        submitHandler,
        orderSent,
        onFormChange,
        name,
        email,
        phone,
        address,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
