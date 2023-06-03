import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const { shops, cart, currentShopId, shopId } = useContextShops();

  return (
    <div className={styles.shop}>
      <h2 className={styles.title}>Shops</h2>
      <ul className={styles.shops}>
        {shops.map((shop) => (
          <li key={shop.id}>
            <button
              onClick={() => currentShopId(shop.id)}
              disabled={cart.length >= 1 ? shop.id !== shopId : false}
            >
              {shop.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
