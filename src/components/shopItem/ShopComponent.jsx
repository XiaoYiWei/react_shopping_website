import React from 'react';
import { ShopContextProvider } from './context';
import ShopItemComponent from './components/ShopItemComponent';

const ShopComponent = () => {
  return (
    <ShopContextProvider>
      <ShopItemComponent />
    </ShopContextProvider>
  );
};

export default ShopComponent;
