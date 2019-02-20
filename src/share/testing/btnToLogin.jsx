import React from 'react';
import { Button } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
// this also works with react-router-native

export const ToLoginButton = withRouter(({ history }) => (
  <Button
    type="button"
    onClick={() => {
      history.push('/login');
    }}
  >
    To login!
  </Button>
));
