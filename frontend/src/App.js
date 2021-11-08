import React, { useEffect } from "react";
import "./App.css";

import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });

  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
