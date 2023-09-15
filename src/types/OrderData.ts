export type OrderData = {
  user: string;
  order: {
    goods: string[];
    totalPrice: number;
  };
};
