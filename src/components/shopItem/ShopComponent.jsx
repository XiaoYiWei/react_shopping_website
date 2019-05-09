import React from 'react';
import loadable from '@loadable/component';
import { ShopContextProvider } from './context';

const ShopItemComponent = loadable(() => import('./components/ShopItemComponent'));

const ShopComponent = () => {
  return (
    <ShopContextProvider>
      <ShopItemComponent />
    </ShopContextProvider>
  );
};

export default ShopComponent;
