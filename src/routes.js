import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Header from "./components/Header/index";
import "./styles.css";
export default function Routes() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
