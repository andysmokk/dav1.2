import axios from "axios";

const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "";

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

async function sendOrder() {
  try {
  } catch (error) {
    console.error(error.message);
  }
}

const api = { getShops, getProducts, sendOrder };
export default api;
