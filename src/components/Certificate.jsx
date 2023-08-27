import React from "react";
import styles from "./Certificate.module.css";
import cert from "../assets/certificate.jpg";

export const Certificate = () => {
  return (
    <div className={styles.container}>
      <h1>Get certificates on course completion</h1>
      <p>
        Receive Certificates When You Successfully Complete Our Courses,
        Validating Your Achievements and Skill Development.
      </p>

      <div className={styles.certficateHolder}>
        <img src={cert} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
    </div>
  );
};
