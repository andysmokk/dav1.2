import React from "react";
import styles from "./ShopPage.module.css";
import { SideBar } from "../../components/SideBar/SideBar";
import { Products } from "../../components/Products/Products";

export const ShopPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.shop}>
          <SideBar />
          <Products />
        </div>
      </div>
    </main>
  );
};
