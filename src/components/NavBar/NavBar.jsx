import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { totalQuantityProductsCart } = useContextShops();

  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.links}>
          <Link className={styles.link} to="/">
            Shop
          </Link>
          <Link className={styles.link} to="/shopping-cart">
            Cart
            <ShoppingCart size={25} weight="bold" className={styles.svg} />
            {totalQuantityProductsCart() > 0 && (
              <>({totalQuantityProductsCart()})</>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
