import { nanoid } from "nanoid";
import { HistoryBarOrder } from "../HistoryBarOrder/HistoryBarOrder";
import styles from "./HistoryBarOrders.module.css";

export const HistoryBarOrders = ({ orders }) => {

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
