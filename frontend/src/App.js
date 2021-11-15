import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Configurations
import WebFont from "webfontloader";

// Components
import Header from "./component/layout/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/layout/Footer/Footer";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
