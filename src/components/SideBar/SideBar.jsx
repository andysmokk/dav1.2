import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const { shops, currentShopId } = useContextShops();

  return (
    <div className={styles.shop}>
      <h2 className={styles.title}>Shops</h2>
      <ul className={styles.shops}>
        {shops.map((shop) => (
          <li key={shop.id}>
            <button onClick={() => currentShopId(shop.id)}>{shop.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
