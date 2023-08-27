import React from "react";
import styles from "./CourseDetails.module.css";
import discount from "../assets/discount.jpg";
import { useState } from "react";
import { FiBarChart } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import logo from "../assets/logosingle.png";
import { DropdownContents } from "./DropdownContents";

export const CourseDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.courseContent}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={discount}
          alt="image-discounted"
        />
        <div className={styles.pricing}>
          <div className={styles.addtocart}>
            <div>
              <h1>
                ₹ 7,000.0{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "rgb(139, 139, 139)",
                  }}
                >
                  ₹ 25,000.00
                </span>
              </h1>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className={styles.level}>
            <div>
              <FiBarChart />
              <h3>All levels</h3>
            </div>
            <div>
              <BiTimeFive />
              <h3>12 Months Duration</h3>
            </div>
            <div>
              <TfiReload />
              <h3>August 23, 2023 Last Updated</h3>
            </div>
          </div>
        </div>
        <div className={styles.CourseMain}>
          <div className={styles.courseContentHead}>
            <h1>About Course</h1>
            <h2>Training will start from: 09 September 2023.</h2>
            <p>
              Get ready for a year-long journey into the exciting world of web
              development with our Full Stack Web Development Training. Designed
              for students like you, this program will take you from the
              foundations of HTML, CSS, and JavaScript to mastering advanced
              technologies like ReactJS, NodeJS, databases, and server
              management. This curriculum is designed to provide you with a
              solid foundation and the advanced knowledge needed to excel in the
              rapidly evolving field of technology. As you progress through each
              module, you’ll engage in hands-on projects, interactive classes,
              and gain practical experience that will set you apart as a skilled
              and proficient full stack developer. Upon successful completion,
              you’ll receive an internship certificate, validating your
              expertise and preparing you for a successful career in the dynamic
              world of web development.
            </p>
          </div>
          <div className={styles.courseContentMid}>
            <h2>What Will You Learn?</h2>
            <div className={styles.ListofTech}>
              <ul>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>JQuery</li>
                <li>NodeJS</li>
                <li>Linux</li>
                <li>Git</li>
                <li>Hosting on CPanel</li>
                <li>Email Setup (MX Record)</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>JQuery</li>
                <li>NodeJS</li>
                <li>Linux</li>
                <li>Git</li>
                <li>Hosting on CPanel</li>
                <li>Email Setup (MX Record)</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>JQuery</li>
                <li>NodeJS</li>
                <li>Linux</li>
                <li>Git</li>
                <li>Hosting on CPanel</li>
                <li>Email Setup (MX Record)</li>
              </ul>
            </div>
            <DropdownContents />
          </div>
        </div>
      </div>
      <div className={styles.sideDetails}>
        <div className={styles.introduction}>
          <h4>A course by</h4>
          <div className={styles.subIntroLogo}>
            <img src={logo} alt="logo" />
            <h4>Xzect</h4>
          </div>
        </div>
        <div className={styles.courseSuitable}>
          <h2>Course Suitable</h2>
          <ul>
            <li>Recent Completed High School</li>
            <li>Undergraduates (B.Tech, BCA, MCA, B.VOC)</li>
            <li>Aspiring Developers</li>
            <li>Tech Enthusiats</li>
          </ul>
        </div>
        <div className={styles.courseSuitable}>
          <h2>Course Highlights</h2>
          <ul>
            <li>Recent Completed High School</li>
            <li>Undergraduates (B.Tech, BCA, MCA, B.VOC)</li>
            <li>Aspiring Developers</li>
            <li>Tech Enthusiats</li>
          </ul>
        </div>
        <div className={styles.courseSuitable}>
          <h2>Course Timings</h2>
          <ul>
            <li>Recent Completed High School</li>
            <li>Undergraduates (B.Tech, BCA, MCA, B.VOC)</li>
            <li>Aspiring Developers</li>
            <li>Tech Enthusiats</li>
          </ul>
        </div>
        <div className={styles.courseSuitable}>
          <h2>Requirements</h2>
          <ul>
            <li>Recent Completed High School</li>
            <li>Undergraduates (B.Tech, BCA, MCA, B.VOC)</li>
            <li>Aspiring Developers</li>
            <li>Tech Enthusiats</li>
          </ul>
        </div>
        <div className={styles.courseTagWrapper}>
          <h2>Tags</h2>
          <div className={styles.courseTags}>
            <button>Certificate</button>
            <button>Full Stack Development</button>
            <div>
              <button>Live Classes</button>
              <button>Software</button>
            </div>
            <button>Student Discount</button>
          </div>
        </div>
      </div>
    </div>
  );
};
