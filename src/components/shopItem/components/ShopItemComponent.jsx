import React, { useMemo, useEffect, useContext, useState } from 'react';
import { Grid, Container, Label, Icon, Pagination } from 'semantic-ui-react';
import { shopItems } from '../../../data/shopItems';
import ItemCells from './ItemCells';
import { ShopContext } from '../context';
import { setItems, setPageItems } from '../context/action';

const ShopItemComponent = () => {
  const pageSize = 5;
  const { state, dispatch } = useContext(ShopContext);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function handlePaginationChange(e, { activePage }) {
    console.info(`switching page to ${activePage}`);
    setPageIndex(activePage);
  }

  async function loadPagedItems(pPageIndex) {
    console.info(`loading page ${pPageIndex}`);
    const source = shopItems;
    const startIndex = pPageIndex * pageSize;
    const pagedItems = source.slice(startIndex, startIndex + pageSize);
    dispatch(setPageItems(pPageIndex, pagedItems));
  }

  useEffect(() => {
    console.info('ShopItemComponent effect!');

    // 這裡加入根據頁數取得對應的資料,並塞進ShopContext裡
    loadPagedItems(pageIndex - 1);
    return () => {
      console.info('ShopItemComponent unmounted');
    };
  }, [pageIndex]);

  return useMemo(() => {
    return (
      <Container id="container1">
        <Label>
          <Icon name="mail" /> {pageIndex}
        </Label>
        <Grid>
          <Grid.Row>
            <ItemCells rowItems={state.shopItems} />
          </Grid.Row>
        </Grid>
        <Pagination
          activePage={pageIndex}
          ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          onPageChange={handlePaginationChange}
          totalPages={shopItems.length / pageSize}
        />
      </Container>
    );
  }, [state.shopItems, shopItems, pageIndex]);
};

export default ShopItemComponent;
