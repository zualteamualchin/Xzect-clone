import React, { useState } from "react";
import styles from "./DropdownContents.module.css";
import { LuCircleDot } from "react-icons/lu";
import { AiOutlineLock } from "react-icons/ai";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const DropdownContents = () => {
  const [dropdown, setDropdown] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });
  const [contentHeight, setContentHeight] = useState({
    1: `${3 * 10}vh`,
    2: `${11 * 10}vh`,
    3: `${5 * 10}vh`,
    4: `${7 * 10}vh`,
    5: `${11 * 10}vh`,
    6: `${5 * 10}vh`,
    7: `${5 * 10}vh`,
    8: `${5 * 10}vh`,
    9: `${6 * 10}vh`,
    10: `${5 * 10}vh`,
    11: `${4 * 10}vh`,
  });
  const handleClick = (id) => {
    setDropdown((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className={styles.courseContentLast}>
      <h1>Course Content</h1>
      <div>
        <div
          onClick={() => {
            handleClick(1);
            console.log(dropdown[1]);
          }}
          className={`${
            dropdown[1] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Web Fundamentals</p>
          <FaArrowAltCircleRight
            className={`${dropdown[1] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[1] ? { maxHeight: contentHeight[1] } : { maxHeight: 0 }
          }
          className={`${dropdown[1] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to Web development</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">HTML5: Tags, attributes, and semantic elements</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Basic CSS styling and layout</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(2);
            console.log(dropdown[2]);
          }}
          className={`${
            dropdown[2] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Advanced CSS and Responsive Design</p>
          <FaArrowAltCircleRight
            className={`${dropdown[2] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[2] ? { maxHeight: contentHeight[2] } : { maxHeight: 0 }
          }
          className={`${dropdown[2] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                In-depth study of CSS selectors, properties, and values
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Box model and layout techniques</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Flexbox and CSS Grid layout</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Creating responsive designs with media queries</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to Bootstrap framework</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">In-depth study of Bootstrap framework</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to Tailwind CSS</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Building responsive and attractive UIs</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Design systems and UI/UX principles</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Animation and transitions with CSS</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(3);
            console.log(dropdown[3]);
          }}
          className={`${
            dropdown[3] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Javascript Fundamentals</p>
          <FaArrowAltCircleRight
            className={`${dropdown[3] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[3] ? { maxHeight: contentHeight[3] } : { maxHeight: 0 }
          }
          className={`${dropdown[3] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to JavaScript programming</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Working with variables, data types, and operators</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Control structures: Conditional statements and loops
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Functions, scope, and closures</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Manipulating arrays and objects</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(4);
            console.log(dropdown[4]);
          }}
          className={`${
            dropdown[4] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Advanced Javascript & Jquery</p>
          <FaArrowAltCircleRight
            className={`${dropdown[4] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[4] ? { maxHeight: contentHeight[4] } : { maxHeight: 0 }
          }
          className={`${dropdown[4] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Understanding the Document Object Model (DOM)</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Manipulating the DOM with JavaScript</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to jQuery library</a>
            </div>
            <AiOutlineLock />
          </div>

          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                ES6+ features: Arrow functions, template literals, destructuring
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Asynchronous programming: Promises and async/await</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Fetch API for making HTTP requests</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Working with JSON data</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(5);
            console.log(dropdown[5]);
          }}
          className={`${
            dropdown[5] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Modern Frontend Development</p>
          <FaArrowAltCircleRight
            className={`${dropdown[5] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[5] ? { maxHeight: contentHeight[5] } : { maxHeight: 0 }
          }
          className={`${dropdown[5] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to ReactJS and its concepts</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Building dynamic and interactive user interfaces</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">State Management and Hooks</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">React Router and Navigation</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Advanced React and Next.js Fundamentals</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Data Fetching in Next.js</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Rendering Methods in NextJS: SSR, SSG, CSR, etc.</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Styling and Layout in React and Next.js</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Forms and User Input</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">State Management and Redux</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Testing and Debugging React and Next.js Apps</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(6);
            console.log(dropdown[6]);
          }}
          className={`${
            dropdown[6] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Node.js and Express.js</p>
          <FaArrowAltCircleRight
            className={`${dropdown[6] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[6] ? { maxHeight: contentHeight[6] } : { maxHeight: 0 }
          }
          className={`${dropdown[6] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Introduction to server-side programming with Node.js
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Building RESTful APIs with Express.js</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Middleware, request handling, and routing</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">File uploading and storage using Node.js</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Using third-party APIs in Node.js applications</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(7);
            console.log(dropdown[7]);
          }}
          className={`${
            dropdown[7] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Database - Relational and SQL</p>
          <FaArrowAltCircleRight
            className={`${dropdown[7] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[7] ? { maxHeight: contentHeight[7] } : { maxHeight: 0 }
          }
          className={`${dropdown[7] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Basics of relational databases and data modeling</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Writing SQL queries for data manipulation and retrieval
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Database normalization and performance optimization</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Advanced SQL techniques: Joins and subqueries</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Transactions and ACID properties in databases</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(8);
            console.log(dropdown[8]);
          }}
          className={`${
            dropdown[8] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Database - NoSQL and Authentication</p>
          <FaArrowAltCircleRight
            className={`${dropdown[8] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[8] ? { maxHeight: contentHeight[8] } : { maxHeight: 0 }
          }
          className={`${dropdown[8] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Introduction to NoSQL databases: MongoDB and document-based data
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Schema design, CRUD operations, and indexing with MongoDB
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">User authentication and authorization strategies</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Using JWT for token-based authentication</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Handling user sessions and cookies</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(9);
            console.log(dropdown[9]);
          }}
          className={`${
            dropdown[9] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Backend Development - API and Security</p>
          <FaArrowAltCircleRight
            className={`${dropdown[9] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[9] ? { maxHeight: contentHeight[9] } : { maxHeight: 0 }
          }
          className={`${dropdown[9] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Building secure APIs with authentication and authorization
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Input validation, data sanitization, and security best practices
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Implementing OAuth for third-party authentication</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Rate limiting and API throttling</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">API documentation</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Payment Gateway Integration</a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(10);
            console.log(dropdown[10]);
          }}
          className={`${
            dropdown[10] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Deployment and Devops</p>
          <FaArrowAltCircleRight
            className={`${dropdown[10] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[10] ? { maxHeight: contentHeight[10] } : { maxHeight: 0 }
          }
          className={`${dropdown[10] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to version control with Git and GitHub</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Deploying applications using Nginx or Apache</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Continuous Integration and Continuous Deployment (CI/CD)
                pipelines
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Introduction to Docker for containerization</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Load balancing and auto-scaling in cloud environments
              </a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
        <div
          onClick={() => {
            handleClick(11);
            console.log(dropdown[11]);
          }}
          className={`${
            dropdown[11] ? styles.activedropper : styles.passivedropper
          }`}
        >
          <p>Cloud Services and Hosting</p>
          <FaArrowAltCircleRight
            className={`${dropdown[11] ? styles.turnoff : styles.turnon}`}
          />
        </div>
        <div
          style={
            dropdown[11] ? { maxHeight: contentHeight[11] } : { maxHeight: 0 }
          }
          className={`${dropdown[11] ? styles.show : styles.hide}`}
        >
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Hosting and scaling applications on cloud platforms: AWS, GCP,
                or Azure
              </a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Serverless computing and AWS Lambda functions</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">Setting up CI/CD pipelines for automated deployment</a>
            </div>
            <AiOutlineLock />
          </div>
          <div className={styles.dropdown}>
            <div>
              <LuCircleDot />
              <a href="">
                Web hosting management using cPanel, SSL certificates, and
                domain setup
              </a>
            </div>
            <AiOutlineLock />
          </div>
        </div>
      </div>
    </div>
  );
};
