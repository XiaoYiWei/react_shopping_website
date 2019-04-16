import React, { useState, useEffect } from 'react';
import { Button, Grid, Image, Container, Icon } from 'semantic-ui-react';
import produce from 'immer';
import { shopItems } from '../../data/shopItems';

const AddToChartButton = item => {
  return (
    <Button icon>
      <Icon name="plus" />
      Add to Chart
    </Button>
  );
};

const itemCells = rowItems => {
  const cells = [];
  rowItems.forEach(item => {
    cells.push(
      <Grid.Column width={4} key={`shopitem_column_${item.itemId}`}>
        {item.itemName}
        <div>
          <Image src={`/img/${item.image}`} alt="product item" size="medium" rounded />
        </div>
        <div />
      </Grid.Column>
    );
  });
  return cells;
};

const itemRow = rowItems => {
  return <Grid.Row>{itemCells(rowItems)}</Grid.Row>;
};

const ShopItemComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.info('effect!');
    setItems(shopItems);

    let testData = {};
    const loadedUser = produce(testData, async function(draft) {
      draft.todos = await (await window.fetch('http://northwind.servicestack.net/customers.json')).json();
    });
    return () => {
      setItems([]);
      console.info('unmounted');
    };
  }, [setItems]);
  return (
    <Container>
      {' '}
      <Grid>{itemRow(items)}</Grid>
    </Container>
  );
};

export default ShopItemComponent;
