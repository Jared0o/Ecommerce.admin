import { createStore } from 'redux';

export const login = (payload) => {
  return {
    type: 'auth/login',
    payload,
  };
};

export const logout = (payload) => {
  console.log('dupa');
  return {
    type: 'auth/logout',
    payload,
  };
};

const initialAuth = {
  auth: {
    user: {},
    isLoggedIn: false,
  },
};

const authReducer = (state = initialAuth, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'auth/login':
      return {
        ...state,
        auth: {
          user: { ...payload },
          isLoggedIn: true,
        },
      };
    case 'auth/logout':
      return {
        ...state,
        auth: {
          user: null,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
