import axios from "axios";

const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "https://delivery-app-back-q2h7.onrender.com";
// const BASE_URL_POST = "http://localhost:3005";

const getShops = async () => {
  try {
    const data = await axios.get(`${BASE_URL_FETCH}/shops`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL_FETCH}/products`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

const sendOrder = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL_POST}/orders/shopping-cart`,
      data
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

const getOrders = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL_POST}/orders/history`, data);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

const api = { getShops, getProducts, sendOrder, getOrders };
export default api;
