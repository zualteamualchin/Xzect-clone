import React from "react";
import styles from "./Conclusion.module.css";
import logo from "../assets/logo.png";

export const Conclusion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.courseConclusion}>
          <div className={styles.logoWrapper}>
            <img src={logo} style={{ width: "100%", height: "100%" }} alt="" />
          </div>
          <h3>Unlock Your Potential with Xzect’s Dynamic Courses</h3>
          <p>
            Xzect goes beyond providing services – we’re committed to empowering
            both businesses and individuals through our diverse range of
            Services. We also provides Courses and Trainings. Delve into the
            world of technology and innovation with our specialized training
            offerings, designed to enhance your skills and open new avenues of
            growth. Our courses cover a wide spectrum of cutting-edge fields,
            including software development, website design, SEO strategies,
            cloud solutions, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IoT applications, AR and VR experiences, blockchain technology, and
            more.
          </p>
          <p>
            Led by our team of seasoned professionals, each course is carefully
            crafted to provide practical insights, hands-on experiences, and
            industry-relevant knowledge. Whether you’re looking to upskill,
            explore new horizons, or dive deeper into a specific tech
            discipline, Xzect’s courses are your gateway to mastering the tools
            and techniques that drive innovation
          </p>
          <div style={{ marginTop: "3rem", fontSize: "0.8rem" }}>
            <h2>+91 98188 06393</h2>
            <h2>contact@xzect.com</h2>
          </div>
        </div>
        <div className={styles.courses}>
          <h3>Courses</h3>
          <ul>
            <li className={styles.points}>
              <a href="">Full Stack Dev. Training Course (Student Offer)</a>
            </li>
            <li className={styles.points}>
              <a href="">Full Stack Dev. (Professionals)</a>
            </li>
            <li className={styles.points}>
              <a href="">Full Stack Dev. (Certification Course)</a>
            </li>
            <li className={styles.points}>
              <a href="">Data Science Course</a>
            </li>
            <li className={styles.points}>
              <a href="">PowerBI Crash Course</a>
            </li>
            <li className={styles.points}>
              <a href="">Tableau Crash Course</a>
            </li>
            <li className={styles.points}>
              <a href="">UI/UX Design Course</a>
            </li>
            <li className={styles.points}>
              <a href="">Full Stack Dev. (Placement Guarantee)</a>
            </li>
            <li className={styles.points}>
              <a href="">Magento Development Course</a>
            </li>
            <li className={styles.points}>
              <a href="">WordPress Development Course</a>
            </li>
            <li className={styles.points}>
              <a href="">Arduino Complete Tutorial</a>
            </li>
            <li className={styles.points}>
              <a href="">3D Printing with Fusion 360</a>
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <h3>About</h3>
          <ul>
            <li className={styles.points}>
              <a href="">Go to Main Website</a>
            </li>
            <li className={styles.points}>
              <a href="">About Xzect</a>
            </li>
            <li className={styles.points}>
              <a href="">Tech Stack</a>
            </li>
            <li className={styles.points}>
              <a href="">Our Services</a>
            </li>
            <li className={styles.points}>
              <a href="">Industries</a>
            </li>
            <li className={styles.points}>
              <a href="">Contact Us</a>
            </li>
            <li className={styles.points}>
              <a href="">Terms & Conditions</a>
            </li>
            <li className={styles.points}>
              <a href="">Refund Policy</a>
            </li>
            <li className={styles.points}>
              <a href="">Shipping Policy</a>
            </li>
            <li className={styles.points}>
              <a href="">Privacy Policy</a>
            </li>
            <li className={styles.points}>
              <a href="">Legal Information</a>
            </li>
            <li className={styles.points}>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
