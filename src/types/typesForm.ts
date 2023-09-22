export interface IHistoryForm {
  email: string;
  phone: string;
}

export interface ISendOrderForm {
  user: IHistoryForm;
  order: {
    goods: {
      product: {
        createdAt: string;
        id: string;
        idShop: string;
        img: string;
        name: string;
        price: number;
      };
      quantity: number;
    }[];
    totalPrice: number;
  };
}
