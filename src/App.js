import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { createStore, StoreCreator } from 'redux';
import { MenuComponent } from './share/menu/menuComponent';
import loginReducer from './components/login/reducer';
import FakeBtn from './share/testing/FakeBtn';

import LoginForm from './components/login/loginComponent';
import { ToLoginButton } from './share/testing/btnToLogin';
class App extends Component {
  store: StoreCreator;

  constructor(prop) {
    super();
    const initialState = Immutable.Map();
    const rootReducer = combineReducers({ loginReducer });
    this.store = createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({
          serialize: {
            immutable: Immutable
            // refs: initialState
          }
        })
    );
  }
  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <div>
            <div>
              <Route render={props => <MenuComponent />} />
            </div>
            <div>
              <FakeBtn />
              <ToLoginButton />
            </div>
            <div>
              <Route path="/login" component={LoginForm} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
