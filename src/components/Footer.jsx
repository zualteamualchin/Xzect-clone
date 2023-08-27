import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mailID}>
          <a href="">Main Website (www.xzect.com)</a>
        </div>
        <div>
          <p>© 2018 - 2023. Xzect Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
