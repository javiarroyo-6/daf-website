import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
