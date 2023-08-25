import React from "react";
import styles from "./HistoryPage.module.css";
import { HistoryBar } from "../../components/HistoryBar/HistoryBar";

export const HistoryPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.history}>
          <HistoryBar />
        </div>
      </div>
    </main>
  );
};
