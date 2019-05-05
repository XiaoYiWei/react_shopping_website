import { createActions } from 'redux-actions';

const { setItems, setPageItems, increaseCount } = createActions({
  SET_ITEMS: shopItems => shopItems,
  SET_PAGE_ITEMS: (pageIndex, shopItems) => ({ pageIndex, shopItems }),
  INCREASE_COUNT: itemId => ({ itemId })
});

export { setItems, setPageItems, increaseCount };
