import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./Products.module.css";

export const Products = () => {
  const { productsOfCurrentShop, addProductToCart, quantityProductsCart } =
    useContextShops();

  return (
    <ul className={styles.products}>
      {productsOfCurrentShop.length === 0 ? (
        <li>
          <h2 className={styles.title}>Please, select a Shop</h2>
        </li>
      ) : (
        productsOfCurrentShop.map((product) => (
          <li className={styles.item} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.name} />
            <div className={styles.flexBox}>
              <div>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.price}>Price: {product.price}$</p>
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={() => addProductToCart(product.id)}
              >
                Add To Cart{" "}
                {quantityProductsCart(product.id) > 0 && (
                  <>({quantityProductsCart(product.id)})</>
                )}
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};
