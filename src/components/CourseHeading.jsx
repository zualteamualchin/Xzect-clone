import React, { useState } from "react";
import styler from "./courseHeading.module.css"; // Import the CSS module
import logo from "../assets/logosingle.png";
import { BsBookmark } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

export const CourseHeading = () => {
  return (
    <div className={styler.coursecontainer}>
      <p className={styler.courseTitle}>
        Full Stack Web Development Training (Student Offer)
      </p>
      <div className={styler.Minordetails}>
        <div className={styler.creator}>
          <div className={styler.logoContainer}>
            <img
              src={logo}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              alt="logo"
            />
          </div>
          <div className={styler.authorDetails}>
            <p>
              By {"   "} <a href="">Xzect</a>
            </p>
            <p className={styler.categories}>Categories </p>
            <a href="">:{"    "}Featured</a>
            <a href="">,{"  "}Live,</a>
            <a href="">Software Development</a>
          </div>
        </div>

        <div className={styler.events}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <BsBookmark />
            <p id="bookmark">Wishlist</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <PiShareFatLight />
            <p id="share">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};
