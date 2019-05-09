import React from 'react';
import loadable from '@loadable/component';
import { ShopContextProvider } from './context';
// import ShopItemComponent from './components/ShopItemComponent';

const ShopItemComponent = loadable(() => import('./components/ShopItemComponent'));

const ShopComponent = () => {
  return (
    <ShopContextProvider>
      <ShopItemComponent />
    </ShopContextProvider>
  );
};

export default ShopComponent;
