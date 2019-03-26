import React from 'react';

const UserEmail = props => {
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
        values.userEmail = e.currentTarget.value;
      }}
    />
  {
    errors.userEmail && touched.userEmail && <div className="input-feedback">{errors.userEmail}</div>;
  }
  </div>
  )
};
