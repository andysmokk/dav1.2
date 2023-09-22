export interface IGetShops {
  createdAt: string;
  id: string;
  name: string;
}

export interface IGetProducts extends IGetShops {
  img: string;
  price: number;
  idShop: string;
}

// export interface IResponse {
//   code: number;
//   status: string;
// }

// export const products: GetProducts = {
//   createdAt: "string",
//   img: "string",
//   name: "string",
//   price: 5,
//   idShop: "string",
//   id: "string",
// };

// export interface HttpResponse<T> extends Response {
//   parsedBody?: T;
//   data: GetShops[];
// }

//  data, status, statusText, headers, config;
