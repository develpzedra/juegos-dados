import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import './style.less';

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
     return (
          <div className="App">
               <NavBar />
               <Hero />
               <Footer />
          </div>
     );
}

export default App;
