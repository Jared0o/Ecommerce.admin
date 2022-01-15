import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { globalStyle as GlobalStyle } from 'assets/styles/globalStyle';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppPrivder = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppPrivder;
