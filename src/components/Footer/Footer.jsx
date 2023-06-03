import React from "react";
import { GithubLogo } from "phosphor-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.boxBorder}>
          <a
            className={styles.link}
            href="https://github.com/andysmokk/dav1.2"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={45} weight="bold" className={styles.svg} />
            2023
          </a>
        </div>
      </div>
    </footer>
  );
};
