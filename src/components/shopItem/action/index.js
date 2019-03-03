import { createActions } from 'redux-actions';
import { ADD_TO_CHART } from './../constants/index';
const { addToChart } = createActions({
  ADD_TO_CHART: shopItem => ({ itemId: shopItem.itemId }),
  REMOVE_FROM_CHART: shopItem => ({ itemId: shopItem.itemId })
});

export default { addToChart };
