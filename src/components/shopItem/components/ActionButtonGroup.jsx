import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import { ShopContext } from '../context';
import { increaseCount } from '../context/action';

const ActionButtonGroup = styled.div`
  height: 70px;
  text-align: center;
  visibility: hidden;
  background-color: green;
`;

const ActionButtonGroupComponent = ({ shopItem }) => {
  const { dispatch } = React.useContext(ShopContext);

  const onButtonClicked = () => {
    console.info('Clicked ShopItem', shopItem);
    dispatch(increaseCount(shopItem._id));
  };
  return (
    <ActionButtonGroup className="actionBtnGroup">
      <Button icon onClick={onButtonClicked}>
        <Icon name="plus" />
        加入購物車
      </Button>
    </ActionButtonGroup>
  );
};

export { ActionButtonGroupComponent, ActionButtonGroup };

ActionButtonGroupComponent.propTypes = {
  shopItem: PropTypes.shape({ _id: PropTypes.string }).isRequired
};
