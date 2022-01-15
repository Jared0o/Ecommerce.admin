import React, { useState } from 'react';
import styled from 'styled-components';
import avatarPlaceholder from 'assets/images/avatar-placeholder.png';
import { useDispatch } from 'react-redux';
import { logOut } from 'services/authService';
import { logout } from 'store';
const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  grid-row: 1 / 1;
  grid-column: 3 / 3;
  margin-top: 20px;
  margin-right: 20px;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0px 14px 34px rgba(34, 37, 169, 0.4);
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }

    &::after {
      content: '99';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.blue};
      top: -7px;
      left: -7px;
      border-radius: 20px;
      font-size: 9px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const UserInfo = (props) => {
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();
  const signOut = () => {
    logOut();
    dispatch(logout());
  };

  return userMenu ? (
    <Wrapper>
      <div>
        <img src={avatarPlaceholder} onClick={() => setUserMenu(!userMenu)} />
      </div>
      <ul>
        <li>
          <button onClick={signOut}>Wyloguj</button>
        </li>
      </ul>
    </Wrapper>
  ) : (
    <Wrapper>
      <div>
        <img src={avatarPlaceholder} onClick={() => setUserMenu(!userMenu)} />
      </div>
    </Wrapper>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
