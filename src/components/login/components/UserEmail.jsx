import React from 'react';
import loadable from '@loadable/component';

const { Form } = loadable.lib(() => import('semantic-ui-react'));

const UserEmail = props => {
  const { errors, touched } = props;
  return (
    <div>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        name="userEmail"
        focus
        placeholder="E-mail address"
        error={errors.userEmail && touched.userEmail}
        onChange={e => {
          // values.userEmail = e.currentTarget.value;
        }}
      />
      {errors.userEmail && touched.userEmail && <div className="input-feedback">{errors.userEmail}</div>}
    </div>
  );
};

export default UserEmail;
