import { CartUserBar } from "../CartUserBar/CartUserBar";
import { Cart } from "../Cart/Cart";
import styles from "./CartBar.module.css";

export const CartBar = () => {
  return (
    <div className={styles.box}>
      <CartUserBar />
      <Cart />
    </div>
  );
};
