import React from 'react';
import { Form } from 'semantic-ui-react';

const UserEmail = React.memo(props => {
  const { field, form } = props;
  // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  return (
    <div>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        name="userEmail"
        focus
        value={field.value}
        placeholder="E-mail address"
        error={form.errors.userEmail && form.touched.userEmail}
        onChange={e => {
          console.info('field', field);
          console.info('form', form);
          form.setFieldValue('userEmail', e.currentTarget.value);
        }}
      />
      {form.errors.userEmail && form.touched.userEmail && <div className="input-feedback">{form.errors.userEmail}</div>}
    </div>
  );
});

export default UserEmail;
