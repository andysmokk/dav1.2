import axios from "axios";

const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "https://delivery-app-back-q2h7.onrender.com";

const getShops = async () => {
  try {
    const data = await axios.get(`${BASE_URL_FETCH}/shops`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL_FETCH}/products`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

async function sendOrder(data) {
  console.log(data);
  try {
    const response = await axios.post(`${BASE_URL_POST}/shopping-cart`, data);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

const api = { getShops, getProducts, sendOrder };
export default api;
