import axios from "axios";
import { getErrorMessage } from "../types/CustomError";
import { OrderData } from "../types/OrderData";
import { OrdersData } from "../types/OrdersData";

const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "https://delivery-app-back-q2h7.onrender.com";
// const BASE_URL_POST = "http://localhost:3005";

const getShops = async () => {
  try {
    const data = await axios.get(`${BASE_URL_FETCH}/shops`);
    return data;
  } catch (error) {
    getErrorMessage(error);
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL_FETCH}/products`);
    return response;
  } catch (error) {
    getErrorMessage(error);
  }
};

const sendOrder = async (data: OrderData) => {
  try {
    const response = await axios.post(
      `${BASE_URL_POST}/orders/shopping-cart`,
      data
    );
    return response;
  } catch (error) {
    getErrorMessage(error);
  }
};

const getOrders = async (data: OrdersData) => {
  try {
    const response = await axios.post(`${BASE_URL_POST}/orders/history`, data);
    return response;
  } catch (error) {
    getErrorMessage(error);
  }
};

const api = { getShops, getProducts, sendOrder, getOrders };
export default api;
