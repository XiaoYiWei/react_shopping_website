import React from 'react';
import { Header } from 'semantic-ui-react';

const FormHeader = React.memo(props => (
  <Header as="h2" color="teal" textAlign="center">
    {'Log-in to your account'}
  </Header>
));

export default FormHeader;
