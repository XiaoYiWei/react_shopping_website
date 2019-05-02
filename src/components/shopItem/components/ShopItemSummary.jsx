import React, { useMemo } from 'react';
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
  console.info(`ShopItemSummary rendered ${item._id}`);

  return useMemo(() => {
    return (
      <Grid.Column className="shopItem" width={4}>
        <ProductContent>
          {item.itemName}
          <div>
            <Image src={`/img/${item.image}`} alt="product item" size="medium" rounded />
          </div>
          <ActionButtonGroupComponent shopItem={item} />
        </ProductContent>
      </Grid.Column>
    );
  }, [item]);
});

export default ShopItemSummary;
