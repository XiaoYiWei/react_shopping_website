import React from 'react';
import { Form } from 'semantic-ui-react';

const UserPassword = React.memo(props => {
  const { field, form } = props;

  return (
    <div>
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        name="userPwd"
        focus
        value={field.value}
        placeholder="Password"
        error={form.errors.userPwd && form.touched.userPwd}
        onChange={e => {
          console.info('errors', form.errors);
          form.setFieldValue('userPwd', e.currentTarget.value);
        }}
      />
      {form.errors.userPwd && form.touched.userPwd && <div className="input-feedback">{form.errors.userPwd}</div>}
    </div>
  );
});

export default UserPassword;
