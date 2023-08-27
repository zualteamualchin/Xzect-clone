import React from "react";
import styles from "./Feedbacks.module.css";

export const Feedbacks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardItem}>
          <div className={styles.cardItemDetails}>
            <h1>Live Sessions Recordings​</h1>
            <p>
              Access recordings of all live sessions, ensuring you never miss a
              class and can review concepts at your own pace.
            </p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.cardItemDetails}>
            <h1>Doubt Clearing Support​</h1>
            <p>
              Get dedicated doubt clearing sessions to address any questions and
              clarify concepts for a thorough understanding.
            </p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.cardItemDetails}>
            <h1>Training Certificate​</h1>
            <p>
              Earn a valuable training certificate upon successful completion,
              boosting your resume and demonstrating practical skills.
            </p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.cardItemDetails}>
            <h1>Career Assistance​</h1>
            <p>
              Receive guidance and support for your career journey, including
              resume building and interview preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
