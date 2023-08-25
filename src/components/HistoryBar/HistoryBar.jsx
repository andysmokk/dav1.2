import React, { useState } from "react";
import styles from "./HistoryBar.module.css";
import { Envelope, Phone } from "phosphor-react";
import api from "../../services/shopsAPI";
import { HistoryBarOrders } from "../HistoryBarOrders/HistoryBarOrders";

export const HistoryBar = () => {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.getOrders({ email, phone });
      setOrders(data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <form
        className={styles.historyForm}
        id="historyForm"
        onSubmit={submitHandler}
      >
        <div className={styles.historyFormBox}>
          <div className={styles.inputBox}>
            <label className={styles.label}>
              <span className={styles.span}>Email:</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={email}
                onChange={onFormChange}
                placeholder="Example: email@email.com"
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
                placeholder="Example: 34655221515"
                required
              ></input>
              <Phone size={21} weight="fill" className={styles.svg} />
            </label>
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={email && phone ? false : true}
          >
            What was I ordering?
          </button>
        </div>
      </form>
      <HistoryBarOrders orders={orders} />
    </div>
  );
};
