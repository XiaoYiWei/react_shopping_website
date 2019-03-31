import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const KeepLogin = React.memo(props => {
  const { field, form } = props;
  // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  return (
    <div>
      <Checkbox
        label="Remember me!"
        onChange={(e, { name, checked }) => {
          console.info('checked', checked);
          form.setFieldValue('option.keepLogin', checked);
        }}
        checked={field.value}
      />
    </div>
  );
});

export default KeepLogin;
