import { nanoid } from "nanoid";
import { HistoryBarOrder } from "../HistoryBarOrder/HistoryBarOrder";
import styles from "./HistoryBarOrders.module.css";

export const HistoryBarOrders = ({ orders }) => {
  // console.log(
  //   "🚀 ~ file: HistoryBarOrders.jsx:6 ~ HistoryBarOrders ~ orders:",
  //   orders
  // );
  // const dataOrder = orders.map((order) => order);
  // console.log(
  //   "🚀 ~ file: HistoryBarOrders.jsx:11 ~ HistoryBarOrders ~ dataOrder:",
  //   dataOrder
  // );
  // const order = orders.map((good) => good);
  // console.log(
  //   "🚀 ~ file: HistoryBarOrders.jsx:16 ~ HistoryBarOrders ~ order:",
  //   order
  // );

  return (
    <ul className={styles.list}>
      {orders &&
        orders.map((goods) => (
          <li key={nanoid(10)} className={styles.item}>
            <HistoryBarOrder goods={goods} />
          </li>
        ))}
    </ul>
  );
};
