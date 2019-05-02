import React, { useMemo, useEffect, useContext } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { shopItems } from '../../../data/shopItems';
import ItemCells from './ItemCells';
import { ShopContext } from '../context';
import { setItems } from '../context/action';

const ShopItemComponent = () => {
  const { state, dispatch } = useContext(ShopContext);

  useEffect(() => {
    console.info('ShopItemComponent effect!');
    dispatch(setItems(shopItems));
    return () => {
      console.info('ShopItemComponent unmounted');
    };
  }, []);

  return useMemo(() => {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <ItemCells rowItems={state.shopItems} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }, [state.shopItems]);
};

export default ShopItemComponent;
