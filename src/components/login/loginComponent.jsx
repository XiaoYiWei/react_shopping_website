import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox
} from 'semantic-ui-react';
import { withFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup'; // for everything

const LoginForm = props => {
  const { values, touched, errors, handleSubmit } = props;

  return (
    <div className="login-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
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
                icon="user"
                iconPosition="left"
                name="userEmail"
                focus
                placeholder="E-mail address"
                error={errors.userEmail && touched.userEmail}
                onChange={e => {
                  values.userEmail = e.currentTarget.value;
                }}
              />
              {errors.userEmail && touched.userEmail && (
                <div className="input-feedback">{errors.userEmail}</div>
              )}

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="userPwd"
                error={errors.userPwd && touched.userPwd}
                onChange={e => {
                  values.userPwd = e.currentTarget.value;
                }}
              />
              {errors.userPwd && touched.userPwd && (
                <div className="input-feedback">{errors.userPwd}</div>
              )}

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
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms)),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(LoginForm);
