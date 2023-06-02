import React from "react";
import styles from "./CartUserBar.module.css";

export const CartUserBar = () => {
  return (
    <form id="userForm">
      <div className={styles.userBox}>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Name:</span>
            <input type="text" name="name" required></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Email:</span>
            <input type="email" name="email" required></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Phone:</span>
            <input type="tel" name="phone" required></input>
          </label>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            <span>Address:</span>
            <input type="text" name="address" required></input>
          </label>
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
