import { createActions } from 'redux-actions';

const { setItems } = createActions({
  SET_ITEMS: shopItems => shopItems
});

export { setItems };
