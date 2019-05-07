import React, { useMemo, useEffect, useContext, useState } from 'react';
import { Grid, Container, Label, Icon, Pagination } from 'semantic-ui-react';
import ItemCells from './ItemCells';
import { ShopContext } from '../context';
import { setItems, setPageItems } from '../context/action';
import { pageSize, getPagedItems, getItemsTotalCount } from '../uiLogic';

const ShopItemComponent = () => {
  const { state, dispatch } = useContext(ShopContext);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function handlePaginationChange(e, { activePage }) {
    console.info(`switching page to ${activePage}`);
    setPageIndex(activePage);
  }

  useEffect(() => {
    console.info('ShopItemComponent effect!');
    function loadPagedItems(pPageIndex) {
      console.info(`loading page ${pPageIndex}`);
      const pagedItems = getPagedItems(pPageIndex);
      dispatch(setPageItems(pPageIndex, pagedItems));
    }

    // 這裡加入根據頁數取得對應的資料,並塞進ShopContext裡
    loadPagedItems(pageIndex - 1);
    return () => {
      console.info('ShopItemComponent unmounted');
    };
  }, [pageIndex, dispatch]);

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
          totalPages={getItemsTotalCount.length / pageSize}
        />
      </Container>
    );
  }, [state.shopItems, pageIndex]);
};

export default ShopItemComponent;
