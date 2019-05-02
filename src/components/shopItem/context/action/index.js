import { createActions } from 'redux-actions';

const { setItems, increaseCount } = createActions({
  SET_ITEMS: shopItems => shopItems,
  INCREASE_COUNT: itemId => ({ itemId })
});

export { setItems, increaseCount };
