import React from 'react';
import styled from 'styled-components';
import UserInfo from 'components/organisms/UserInfo/UserInfo';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 260px 1fr 0.75fr;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: hidden;
  padding: 0 40px;
`;

const AuthenticatedApp = (props) => {
  return (
    <Wrapper>
      <UserInfo />
      <h1>Strefa zarejestrowanych</h1>
    </Wrapper>
  );
};

AuthenticatedApp.propTypes = {};

export default AuthenticatedApp;
