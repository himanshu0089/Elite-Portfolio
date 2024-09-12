import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Project from "./Pages/Projects/Project";
import Blog from "./Pages/Blogs/Blog";
import Home from "./components/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { useTheme } from "./store/ThemeContext";

function App() {
  const {theme}=useTheme();
  return (
    <>
      <div
        style={{
          backgroundColor:theme==="light" ? "white" : "black",
          color:theme==="light"? "black" : "white"
        }}
      >

        <Header />
         
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Project />} />  */}
          <Route path="/blog" element={<Blog />} />  
          {/* <Route path="/about" element={<About />} />  */}
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
          
         <Contact /> 
         
        <Footer />
      </div>
    </>
  );
}

export default App;
