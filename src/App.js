import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Resources from './components/Resources';
import About from './components/About';
import Footer from './components/Footer';

class App extends React.Component {
  makeRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { 'Authorization': `Bearer ${jwt}` }
    };
    const serverResponse = await axios.get('http://localhost:3001/test', config);

    console.log(serverResponse);
  }

  render() {
    const { user, isAuthenticated, isLoading } = this.props.auth0;
    console.log('app', user, isLoading);
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
export default withAuth0(App);
