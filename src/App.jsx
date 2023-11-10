import { useState } from "react";
import "./App.css";
import headerSection from "./MyComponents/mainSection";
import testimonialSection from "./MyComponents/testimonialSection";
import courseSection from "./MyComponents/courseSection";
import instructorSection from "./MyComponents/instructorSection";
import footerSection from "./MyComponents/footerSection";

function App() {
  return (
    <div>
      
      {headerSection()}
      {testimonialSection()}
      {courseSection()}
      {instructorSection()}
      {footerSection()} 
    </div>
  );
}

export default App;
