import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from 'services/authService';
import { login } from 'store/index';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthentedApp from './UnauthenticatedApp';

const checkTokenAndSetUserToStore = async (dispatch, token) => {
  const auth = await checkToken(token);
  if (auth) {
    dispatch(login(auth));
  }
};

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkTokenAndSetUserToStore(dispatch, token);
    }
    // eslint-disable-next-line
  }, []);

  const auth = useSelector((state) => state.auth);

  return auth.isLoggedIn && auth.user !== null ? (
    <AuthenticatedApp />
  ) : (
    <UnauthentedApp />
  );
};

App.propTypes = {};

export default App;
