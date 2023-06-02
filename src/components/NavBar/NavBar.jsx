import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
// import { useContextShops } from "../../hooks/useContextShops";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  // const { totalQuantityProductsCart } = useContextShops();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Shop
        </Link>
        <Link className={styles.link} to="/shopping-cart">
          Cart
          <ShoppingCart size={20} />
          {/* {totalQuantityProductsCart() > 0 && (
            <>({totalQuantityProductsCart()})</>
          )} */}
        </Link>
      </div>
    </div>
  );
};
