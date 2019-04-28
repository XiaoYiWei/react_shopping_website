import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const AddToChartButton = item => {
  return (
    <Button icon>
      <Icon name="plus" />
      Add to Chart
    </Button>
  );
};

export default AddToChartButton;
