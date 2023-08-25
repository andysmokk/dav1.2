import React from "react";
import { nanoid } from "nanoid";
import { HistoryBarOrder } from "../HistoryBarOrder/HistoryBarOrder";
import styles from "./HistoryBarOrders.module.css";

export const HistoryBarOrders = ({ orders }) => {
  const dataOrder = orders.map(({ order }) => order);
  const order = dataOrder.map((good) => good);

  return (
    <ul className={styles.list}>
      {order &&
        order.map((goods) => (
          <li key={nanoid(10)} className={styles.item}>
            <HistoryBarOrder goods={goods} />
          </li>
        ))}
    </ul>
  );
};
