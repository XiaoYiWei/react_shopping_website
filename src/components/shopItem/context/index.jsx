import React, { useState, useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';

const ShopContext = createContext();

const initialState = {
  count: 10,
  currentColor: '#bada55'
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
    case 'set-color':
    case 'decrement':
      return draft;
    default:
      return draft;
  }
});

const ShopContextProvider = props => {
  // [A]
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { children } = props;
  // [B]
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const ShopContextComsumer = ShopContext.Comsumer;

export { ShopContext, ShopContextProvider, ShopContextComsumer };

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
