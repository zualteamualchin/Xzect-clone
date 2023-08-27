import React from "react";
import { Navbar } from "./components/Navbar";
import { CourseHeading } from "./components/CourseHeading";
import { CourseDetails } from "./components/CourseDetails";
import { Feedbacks } from "./components/Feedbacks";
import { Certificate } from "./components/Certificate";
import { Conclusion } from "./components/Conclusion";
import { Footer } from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className={App}>
      <Navbar />
      <CourseHeading />
      <CourseDetails />
      <Feedbacks />
      <Certificate />
      <Conclusion />
      <Footer />
    </div>
  );
};

export default App;
