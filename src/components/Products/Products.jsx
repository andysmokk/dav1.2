import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./Products.module.css";

export const Products = () => {
  const { productsOfCurrentShop, addProductToCart } = useContextShops();
  console.log(
    "🚀 ~ file: Products.jsx:7 ~ Products ~ productsOfCurrentShop:",
    productsOfCurrentShop
  );

  return (
    <ul className={styles.products}>
      {productsOfCurrentShop.length === 0 ? (
        <h2>Please, select a Shop</h2>
      ) : (
        productsOfCurrentShop.map((product) => (
          <li className={styles.item} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>Price: {product.price}$</p>
            </div>
            <button
              className={styles.buttonProduct}
              type="button"
              onClick={() => addProductToCart(product.id)}
            >
              Add To Cart
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
