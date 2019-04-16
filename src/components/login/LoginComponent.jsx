import React, { useState, useReducer } from 'react';
import loadable from '@loadable/component';
import { Grid, Message } from 'semantic-ui-react';
import './LoginComponent.scss';

const FormHeader = loadable(() => import('./components/FormHeader'));
const LoginForm = loadable(() => import('./components/LoginForm'));
const Moment = loadable.lib(() => import('moment'));

const LoginComponent = () => {
  return (
    <div className="login-form">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <FormHeader />
          <LoginForm />
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginComponent;
