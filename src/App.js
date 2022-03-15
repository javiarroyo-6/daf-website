import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter basename="/daf-website">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
