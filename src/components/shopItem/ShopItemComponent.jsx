import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox, Container, Icon } from 'semantic-ui-react';
import { withFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup'; // for everything
import PropTypes from 'process';
import { shopItems } from '../../data/shopItems';

const AddToChartButton = item => {
  return (
    <Button icon>
      <Icon name="plus" />
      Add to Chart
    </Button>
  );
};
const itemRow = rowItems => {
  return <Grid.Row>{itemCells(rowItems)}</Grid.Row>;
};
const itemCells = rowItems => {
  const cells = [];
  rowItems.forEach(item => {
    cells.push(
      <Grid.Column width={4} key={'shopitem_column_' + item.itemId}>
        {item.itemName}
        <div>
          <Image src={'/img/' + item.image} alt="product item" size="medium" rounded />
        </div>
        <div />
      </Grid.Column>
    );
  });
  return cells;
};
export const ShopItemComponent = props => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log('effect!');
    setItems(shopItems);
    return () => {
      setItems([]);
      console.log('unmounted');
    };
  }, [setItems]);
  return (
    <Container>
      {' '}
      <Grid>{itemRow(items)}</Grid>
    </Container>
  );
};
