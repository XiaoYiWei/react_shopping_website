import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const itemCells = ({ rowItems }) => {
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

export default itemCells;
