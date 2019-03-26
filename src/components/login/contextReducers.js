export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

const setUserEmail = (content, state) => {
  const updatedState = { ...state };
  updatedState.userEmail = content;
  return updatedState;
};

const setUserPassword = (content, state) => {
  const updatedState = { ...state };
  updatedState.password = content;
  return updatedState;
};

export const contextReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return setUserEmail(action.payload, state);
    case SET_USER_PASSWORD:
      return setUserPassword(action.payload, state);
    default:
      console.warn('Unrecognized action', action);
      return { ...state };
  }
};
