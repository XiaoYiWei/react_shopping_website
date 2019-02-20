import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {
  combineReducers
} from 'redux-immutable';
import Immutable from 'immutable';
import {
  createStore,
  StoreCreator
} from 'redux';
import { MenuComponent } from './share/menu/menuComponent';
import loginReducer from './components/login/reducer'
import FakeBtn from './share/testing/FakeBtn'
class App extends Component {
  store: StoreCreator;

  constructor(prop) {
    super();
    const initialState = Immutable.Map();
    const rootReducer = combineReducers({ loginReducer });
    this.store = createStore(rootReducer, initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: {
          immutable: Immutable,
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
              <Route
                render={(props) => <MenuComponent />}
              />
            </div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <FakeBtn></FakeBtn>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
          </a>
              </header>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
