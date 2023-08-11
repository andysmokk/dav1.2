import React, { useRef } from "react";
import { useContextShops } from "../../hooks/useContextShops";
import { User, Envelope, Phone, House } from "phosphor-react";
import { Map } from "../Map/Map";
import styles from "./CartUserBar.module.css";

import { Autocomplete } from "@react-google-maps/api";

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
    onPlaceChanged,
  } = useContextShops();

  const searchBox = useRef(null);

  return (
    <div className={styles.userBox}>
      <Map />
      <form
        className={styles.userForm}
        id="userForm"
        onSubmit={(e) => submitHandler(e, cart, totalPriceProducts)}
      >
        <div className={styles.userFormBox}>
          <div className={styles.inputBox}>
            <label className={styles.label}>
              <span className={styles.span}>Name:</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onFormChange}
                required
              ></input>
              <User size={20} weight="fill" className={styles.svg} />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label}>
              <span className={styles.span}>Email:</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={onFormChange}
                required
              ></input>
              <Envelope size={21} weight="fill" className={styles.svg} />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label}>
              <span className={styles.span}>Phone:</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                value={phone}
                onChange={onFormChange}
                required
              ></input>
              <Phone size={21} weight="fill" className={styles.svg} />
            </label>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label}>
              <span className={styles.span}>Address:</span>
              <Autocomplete
                onLoad={(ref) => {
                  searchBox.current = ref;
                }}
                onPlaceChanged={() => {
                  onPlaceChanged({
                    lat: searchBox.current.getPlace().geometry.location.lat(),
                    lng: searchBox.current.getPlace().geometry.location.lng(),
                  });
                }}
              >
                <input
                  className={styles.input}
                  type="text"
                  name="address"
                  value={address}
                  onChange={onFormChange}
                  required
                ></input>
              </Autocomplete>

              <House size={21} weight="fill" className={styles.svg} />
            </label>
          </div>
          <p className={styles.price}>Total price: {totalPriceProducts}$</p>
          <button
            type="submit"
            className={styles.button}
            disabled={cart.length > 0 ? false : true}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
