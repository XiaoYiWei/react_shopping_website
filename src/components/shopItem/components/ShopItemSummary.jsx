import React from 'react';
import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';
import { ActionButtonGroupComponent, ActionButtonGroup } from './ActionButtonGroup';

const ProductContent = styled.div`
  &:hover {
    ${ActionButtonGroup} {
      visibility: visible;
    }
  }
`;

const ShopItemSummary = React.memo(({ item }) => {
  // console.info(`ShopItemSummary rendered ${item._id}`);

  return (
    <Grid.Column className="shopItem" width={3}>
      <ProductContent>
        {`${item.itemName}(${item.index})`}
        <div>
          <Image src={`/img/${item.image}`} alt="product item" size="medium" rounded />
        </div>
        <ActionButtonGroupComponent shopItem={item} />
      </ProductContent>
    </Grid.Column>
  );
});

export default ShopItemSummary;
