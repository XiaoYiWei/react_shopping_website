import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { ActionButtonGroupComponent, ActionButtonGroup } from './ActionButtonGroup';
import './itemCell.scss';

const ProductContent = styled.div`
  &:hover {
    ${ActionButtonGroup} {
      visibility: visible;
    }
  }
`;

const itemCells = ({ rowItems }) => {
  const cells = [];
  rowItems.forEach(item => {
    cells.push(
      <Grid.Column className="shopItem" width={4} key={`shopitem_column_${item.itemId}`}>
        <ProductContent>
          {item.itemName}
          <div>
            <Image src={`/img/${item.image}`} alt="product item" size="medium" rounded />
          </div>
          <ActionButtonGroupComponent shopItem={item} />
        </ProductContent>
      </Grid.Column>
    );
  });
  return cells;
};

export default itemCells;
