import React from "react";
import { useContextShops } from "../../hooks/useContextShops";
import styles from "./CartUserBar.module.css";

export const CartUserBar = () => {
  const {
    submitHandler,
    onFormChange,
    name,
    email,
    phone,
    address,
    cart,
    totalPriceProducts,
  } = useContextShops();

  return (
    <form
      id="userForm"
      onSubmit={(e) => submitHandler(e, cart, totalPriceProducts)}
    >
      <div className={styles.userBox}>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onFormChange}
              required
            ></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onFormChange}
              required
            ></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Phone:</span>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={onFormChange}
              required
            ></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Address:</span>
            <input
              type="text"
              name="address"
              value={address}
              onChange={onFormChange}
              required
            ></input>
          </label>
        </div>
        <p>Total price: {totalPriceProducts}$</p>
        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
