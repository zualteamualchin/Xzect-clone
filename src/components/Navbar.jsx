import React from "react";
import logo from "../assets/logo.png";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftConfig}>
        <img className={styles.imageConfig} src={logo} />
      </div>
      <div className={styles.rightConfig}>
        <div className={styles.rightConfigWrapper}>
          <a className={styles.rightItems} href="">
            Blog
          </a>
          <a className={styles.rightItems} href="">
            Xzect.com
          </a>
          <a className={styles.rightItems} href="">
            Courses
          </a>
          <a className={styles.rightItems} href="">
            Contact
          </a>
        </div>
        <button className={styles.buttonConfig}>Login</button>
        <GiHamburgerMenu onClick={toggleSidebar} className={styles.burger} />
        <div className={`${styles.sidebar} ${isActive ? styles.active : ""}`}>
          <div className={styles.closer}>
            <span onClick={toggleSidebar}>X</span>
          </div>
          <div className={styles.itemList}>
            <a href="">Blog</a>
            <a href="">Xzect.com</a>
            <a href="">Courses</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
