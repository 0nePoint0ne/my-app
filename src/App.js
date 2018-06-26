import React, { Component } from 'react';
import logo from './AppleOnTopOfBooks.jpg';
import Modal from 'react-modal';
import './App.css';
import LoginMenu from './modal-login.jsx';
import CheapNav from './cheap-nav.jsx';
import BootStrap from './bootstrap/css/bootstrap.css';
import './site.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header2">
    
          <CheapNav/>
        </header>
        <p className="App-intro">
          <LoginMenu/>
        </p>
      </div>
    );
  }
}

export default App;
