import React from "react";
import styles from "./CartPage.module.css";
import { CartBar } from "../../components/CartBar/CartBar";

export const CartPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.cart}>
          <CartBar />
        </div>
      </div>
    </main>
  );
};
