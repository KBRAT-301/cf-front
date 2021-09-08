import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Footer from './components/Footer';

const SERVER = process.env.REACT_APP_SERVER_URL;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth0.isAuthenticated,
      sound: [],
      selectedSound: null,
    };
  }

  addSound = async (soundInfo) => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'post',
        baseURL: SERVER,
        url: '/sound',
        data: soundInfo,
        params: { email: this.props.auth0.user.email },
      };
      try {
        const response = await axios(config);
        const newSound = response.data;
        const sound = [...this.state.sound, newSound];
        this.setState({ sound });
      } catch (error) {
        res.status(404).send(error);
      }
    });
  };

  getSound = async () => {
    console.log('HERE');
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      console.log(jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'get',
        baseURL: SERVER,
        url: '/',
        params: { email: this.props.auth0.user.email },
      };
      await axios(config)
        .then((response) => {
          console.log('Got a Response?', response.data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    });
  };

  updateSound = async (sound) => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'put',
        baseURL: SERVER,
        url: `/sound/${sound._id}`,
        data: sound,
        params: { email: this.props.auth0.user.email },
      };
      try {
        const response = await axios(config);
        const updateSound = response.data;
        const sounds = this.state.sound.map((sound) =>
          sound._id === updateSound._id ? updateSound : sound
        );
        this.setState({ sounds });
      } catch (error){
        res.status(400).send(error);
      }
    });
  }

  deleteSound = async (soundToDelete) => {
    this.props.auth0.getIdTokenClaims().then(async (res) => {
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'delete',
        baseURL: SERVER,
        url: `/sound/${soundToDelete._id}`,
        data: soundToDelete,
        params: { email: this.props.auth0.user.email },
      };
      await axios(config);
      const sounds = this.state.sounds.filter(
        (sound) => sound._id !== soundToDelete._id
      );
      this.setState({ sounds });
    });
  };

  handleUpdateSound = (soundToUpdate) => {
    this.setState({ selectedSound: soundToUpdate});
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
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
