import React, { useState, useReducer } from 'react';
import loadable from '@loadable/component';
import { withFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup'; // for everything
import { v4 as uuid } from 'uuid';
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react';
import { getUser } from '../../api/fakeApi';
import LoginContext from './login-context';

import UserEmail from './components/UserEmail';
import './LoginComponent.scss';

const Moment = loadable.lib(() => import('moment'));

const LoginForm = props => {
  const { values, touched, errors, handleSubmit, setFieldValue } = props;
  const initialState = { values };

  const setUserEmail = email => {
    setFieldValue('userEmail', email);
  };

  const setUserPwd = password => {
    console.info('password changed', password);
    setFieldValue('userPwd', password);
  };
  return (
    <LoginContext.Provider
      value={{
        userEmail: values.userEmail,
        userPassword: values.userPwd,
        setUserEmail,
        setUserPassword: setUserPwd
      }}
    >
      <div className="login-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src="/logo.png" /> */}
              Log-in to your account
            </Header>
            <Form
              size="large"
              onSubmit={event => {
                console.log('trigged');
                handleSubmit(event);
              }}
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="userPwd"
                  error={errors.userPwd && touched.userPwd}
                  onChange={e => {
                    setUserPwd(e.currentTarget.value);
                  }}
                />
                {errors.userPwd && touched.userPwd && <div className="input-feedback">{errors.userPwd}</div>}

                <Form.Field>
                  <Checkbox
                    name="keepLogin"
                    label="Remember me!"
                    onChange={(e, { name, checked }) => {
                      values.option.keepLogin = checked;
                    }}
                    checked={values.option.keepLogin}
                  />
                </Form.Field>
                <Button color="teal" fluid size="large" type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </LoginContext.Provider>
  );
};

export default withFormik({
  validationSchema: yup.object().shape({
    userEmail: yup
      .string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    userPwd: yup
      .string()
      .min(4, 'Password has to be longer than 4 characters!')
      .oneOf(['1234'], 'must be 1234')
      .required('Password is required!')
    //.equal('1234', 'password is 1234')
  }),
  mapPropsToValues: () => ({
    userEmail: '',
    userPwd: '',
    option: {
      keepLogin: true
    }
  }),
  // Async Validation
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);

    getUser(values.userEmail, values.userPwd).then(users => {
      console.log('users loaded', users);
      localStorage.setItem('userEmail', values.userEmail);
      localStorage.setItem('token', uuid());
    });
  }
})(LoginForm);
