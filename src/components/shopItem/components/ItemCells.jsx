import React from 'react';
import ShopItemSummary from './ShopItemSummary';

const itemCells = React.memo(({ rowItems }) => {
  const cells = [];
  rowItems.forEach(item => {
    cells.push(<ShopItemSummary key={`shop_item_${item._id}`} item={item} />);
  });
  return cells;
});

export default itemCells;
