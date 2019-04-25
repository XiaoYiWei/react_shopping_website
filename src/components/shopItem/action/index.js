import { createActions } from 'redux-actions';

const { fetchProductById, addToChart, removeFromChart, chartItemIncrease, chartItemDerease, fetchProducts } = createActions(
  {
    FETCH_PRODUCT_BY_ID: itemId => itemId,
    ADD_TO_CHART: shopItem => ({ itemId: shopItem.itemId }),
    CHART_ITEM_REMOVE: shopItemId => shopItemId,
    CHART_ITEM_COUNT_INCREASE: shopItemId => shopItemId,
    CHART_ITEM_COUNT_DECREASE: shopItemId => shopItemId
  },
  'FETCH_PRODUCTS'
);

export default { fetchProductById, addToChart, removeFromChart, chartItemIncrease, chartItemDerease, fetchProducts };
