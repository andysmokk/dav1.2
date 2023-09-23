import axios, { AxiosResponse } from "axios";
// import { getErrorMessage } from "../types/CustomError";
// import { OrderData } from "../types/OrderData";
// import { OrdersData } from "../types/OrdersData";
import { IGetShops, IGetProducts } from "../types/typesAPI";
import { IHistoryForm, ISendOrderForm } from "../types/typesForm";

const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "https://delivery-app-back-q2h7.onrender.com";
// const BASE_URL_POST = "http://localhost:3005";

const getShops = async (): Promise<IGetShops[]> => {
  try {
    const { data }: AxiosResponse<IGetShops[]> = await axios.get(
      `${BASE_URL_FETCH}/shops`
    );
    return data;
  } catch (error) {
    // getErrorMessage(error);
    throw error;
  }
};

const getProducts = async (): Promise<IGetProducts[]> => {
  try {
    const { data }: AxiosResponse<IGetProducts[]> = await axios.get(
      `${BASE_URL_FETCH}/products`
    );
    return data;
  } catch (error) {
    // getErrorMessage(error);
    throw error;
  }
};

const sendOrder = async (data: ISendOrderForm): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(
      `${BASE_URL_POST}/orders/shopping-cart`,
      data
    );
    return response;
  } catch (error) {
    // getErrorMessage(error);
    throw error;
  }
};

const getOrders = async (data: IHistoryForm): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(`${BASE_URL_POST}/orders/history`, data);
    return response.data.data;
  } catch (error) {
    // getErrorMessage(error);
    throw error;
  }
};

const api = { getShops, getProducts, sendOrder, getOrders };
export default api;
