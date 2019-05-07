import React from 'react';
import loadable from '@loadable/component';
import { withFormik, FastField, Form } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as yup from 'yup'; // for everything
import { Button, Segment } from 'semantic-ui-react';
import actionCreators from '../action';

const UserEmail = loadable(() => import('./UserEmail'));
const UserPassword = loadable(() => import('./UserPassword'));
const KeepLogin = loadable(() => import('./KeepLogin'));
const LoginForm = React.memo(props => {
  const { handleSubmit } = props;
  return (
    <Form
      size="large"
      onSubmit={event => {
        console.info('trigged');
        handleSubmit(event);
      }}
    >
      <Segment stacked>
        <FastField name="userEmail" component={UserEmail} />
        <FastField name="userPwd" component={UserPassword} />
        <FastField name="option.keepLogin" component={KeepLogin} />
        <Button primary fluid size="large" type="submit" content="Login!" />
      </Segment>
    </Form>
  );
});

const formikEnhancer = withFormik({
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
    // .equal('1234', 'password is 1234')
  }),
  mapPropsToValues: () => ({
    userEmail: '',
    userPwd: '',
    option: {
      keepLogin: true
    }
  }),

  // Async Validation
  handleSubmit: (values, { props, setSubmitting }) => {
    props.startLoginFlow(values.userEmail.split('@')[0], values.userPwd);

    // setTimeout(() => {
    //   console.info(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);

    // getUser(values.userEmail, values.userPwd).then(users => {
    //   console.info('users loaded', users);
    //   localStorage.setItem('userEmail', values.userEmail);
    //   localStorage.setItem('token', uuid());
    // });
  }
})(LoginForm);

const Login = connect(
  null,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(formikEnhancer);

export default Login;
