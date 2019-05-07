import { shopItems } from '../../data/shopItems';

const pageSize = 5;

function getPagedItems(pPageIndex) {
  console.info(`loading page ${pPageIndex}`);
  const source = shopItems;
  const startIndex = pPageIndex * pageSize;
  const pagedItems = source.slice(startIndex, startIndex + pageSize);
  return pagedItems;
}

function getItemsTotalCount() {
  return shopItems.length;
}

export { pageSize, getPagedItems, getItemsTotalCount };
