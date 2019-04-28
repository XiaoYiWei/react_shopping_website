import React, { useState, useEffect } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { shopItems } from '../../data/shopItems';
import ItemCells from './components/ItemCells';

const ShopItemComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.info('effect!');
    setItems(shopItems);

    return () => {
      setItems([]);
      console.info('unmounted');
    };
  }, [setItems]);
  return (
    <Container>
      {' '}
      <Grid>
        <Grid.Row>
          <ItemCells rowItems={items} />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ShopItemComponent;
