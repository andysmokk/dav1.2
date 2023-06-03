import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import { TrashSimple } from "phosphor-react";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart, changeQuantityProduct, removeProductFromCart, orderSent } =
    useContextShops();

  if (cart.length === 0 && !orderSent) {
    return <h2 className={styles.title}>Your cart is empty!</h2>;
  }

  return (
    <div>
      <ul className={styles.list}>
        {orderSent ? (
          <li>
            <h2 className={styles.titleSent}>
              Your order has been sent, thank you!
            </h2>
          </li>
        ) : (
          cart.map((element) => (
            <li key={element.product.id} className={styles.item}>
              <img
                className={styles.img}
                src={element.product.img}
                alt={element.product.name}
              />
              <div className={styles.description}>
                <div>
                  <h3>{element.product.name}</h3>
                  <p>Price: {element.product.price}$</p>
                </div>
                <div>
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
                      value={element.quantity}
                      name="quantity"
                      onChange={(e) =>
                        changeQuantityProduct(
                          element.product.id,
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => removeProductFromCart(element.product.id)}
                >
                  <TrashSimple size={20} weight="fill" />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
