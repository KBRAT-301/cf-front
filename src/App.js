import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import Resources from "./components/Resources";
import About from "./components/About";
import Footer from "./components/Footer";



class App extends React.Component {

  // const serverResponse = await axios.get("http://localhost:3001/test", config);

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
