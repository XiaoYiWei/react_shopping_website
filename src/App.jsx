import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MenuComponent } from './share/menu/menuComponent';
import logo from './logo.svg';
import './App.css';
import FakeBtn from './share/testing/FakeBtn';

import LoginForm from './components/login/LoginComponent';
import { ToLoginButton } from './share/testing/btnToLogin';
import ShopComponent from './components/shopItem/ShopComponent';
import { ToHomeButton } from './share/testing/btnToHome';

class App extends Component {
  constructor(prop) {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Route render={props => <MenuComponent />} />
          </div>
          <div>
            <FakeBtn />
            <ToLoginButton />
            <ToHomeButton />
          </div>
          <div>
            <Route path="/login" component={LoginForm} />
            <Route exact path="/" component={ShopComponent} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
