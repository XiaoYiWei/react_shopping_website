import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';

const ShopContext = createContext();

const initialState = {
  count: 10,
  currentColor: '#bada55',
  shopItems: []
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'SET_ITEMS':
      draft.shopItems = action.payload;
      break;
    case 'SET_PAGE_ITEMS':
      // 設定分頁的資料
      // 大致上是若pageIndex換算出來的資料位置比當前陣列還多,就增加陣列到指定的大小後再塞入
      // 若位置在當前陣列範圍內,則覆蓋資料
      draft.shopItems = [...action.payload.shopItems];
      break;
    case 'INCREASE_COUNT': {
      const targetItem = draft.shopItems.find(item => item._id === action.payload.itemId);
      if (targetItem !== undefined) {
        targetItem.index += 1;
      }
      break;
    }
    case 'set-color':
    case 'decrement':
      return draft;
    default:
      return draft;
  }
  return draft;
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
