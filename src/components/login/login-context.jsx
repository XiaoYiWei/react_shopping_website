import React from 'react';

export default React.createContext({
  userEmail: '',
  userPassword: '',
  setUserEmail: email => {},
  setUserPassword: password => {}
});
