import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart, removeProductFromCart } = useContextShops();

  return (
    <div>
      <ul>
        {cart.map((element) => (
          <li key={element.product.id}>
            <img
              className={styles.img}
              src={element.product.img}
              alt={element.product.name}
            />
            <div className={styles.descriptionBox}>
              <h3>{element.product.name}</h3>
              <div>
                <p>Price: {element.product.price}$</p>
                <div>
                  <label htmlFor="quantity" className={styles.label}>
                    Quantity:
                  </label>
                  <input
                    className={styles.inputQuantity}
                    type="number"
                    step="1"
                    min="1"
                    max="9999"
                    value={element.product.quantity}
                    name="quantity"
                  />
                </div>
              </div>
              <button
                type="button"
                className={styles.CartBarProductBtn}
                onClick={() => removeProductFromCart(element.product.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
