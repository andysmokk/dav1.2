import { nanoid } from "nanoid";
import styles from "./HistoryBarOrder.module.css";

export const HistoryBarOrder = ({ goods }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {goods &&
          goods.goods.map((good) => (
            <li key={nanoid(10)} className={styles.item}>
              <img
                src={good.product.img}
                alt={good.product.name}
                className={styles.img}
              />
              <div>
                <h3>{good.product.name}</h3>
                <p>Price: {good.product.price}$</p>
                <p>Quantity: {good.quantity}</p>
              </div>
            </li>
          ))}
      </ul>
      <h4 className={styles.textTotalPrice}>
        Total Price: {goods.totalPrice}$
      </h4>
    </div>
  );
};
