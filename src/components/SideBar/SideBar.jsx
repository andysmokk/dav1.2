import { useContextShops } from "../../hooks/useContextShops";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const { shops, cart, currentShopId, shopId } = useContextShops();

  return (
    <div className={styles.shops}>
      <h2 className={styles.title}>Shops</h2>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id} className={styles.item}>
            <button
              className={styles.button}
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
