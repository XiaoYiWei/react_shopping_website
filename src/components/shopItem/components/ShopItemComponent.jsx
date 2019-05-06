import React, { useMemo, useEffect, useContext, useState } from 'react';
import { Grid, Container, Label, Icon, Pagination } from 'semantic-ui-react';
import { shopItems } from '../../../data/shopItems';
import ItemCells from './ItemCells';
import { ShopContext } from '../context';
import { setItems, setPageItems } from '../context/action';

const ShopItemComponent = () => {
  const { state, dispatch } = useContext(ShopContext);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaginationChange = (e, { activePage }) => {
    setPageIndex(activePage);
  };

  const loadPagedItems = async pPageIndex => {
    console.info(`loading page ${pPageIndex}`);

    const pagedItems = shopItems.slice(pageIndex * 10, 10);
    dispatch(setPageItems(pPageIndex, pagedItems));
  };

  useEffect(() => {
    console.info('ShopItemComponent effect!');

    // 這裡加入根據頁數取得對應的資料,並塞進ShopContext裡
    loadPagedItems(pageIndex);
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
          activePage={pageIndex + 1}
          ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          onPageChange={handlePaginationChange}
          totalPages={shopItems.length / 10}
        />
      </Container>
    );
  }, [state.shopItems, shopItems, pageIndex]);
};

export default ShopItemComponent;
