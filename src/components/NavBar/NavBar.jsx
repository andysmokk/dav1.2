import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Shop
        </Link>
        <Link className={styles.link} to="/shopping-cart">
          Cart
          <ShoppingCart size={20} />
        </Link>
      </div>
    </div>
  );
};
