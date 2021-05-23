import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserId } from '../features/userSlice';
import image from '../img/m_logo.png';
import LoginModal from '../components/LoginModal';

const TopNavContainer = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const LogoImg = styled.img`
    height: 60%;
    width: 28%;
`

const CartIcon = styled(Link)`
  font-size: 1.4rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-decoration: none;

  p {
      padding-left: 10px;
      font-weight: 500;
  }
`;

const UserContainer = styled.div`
  font-size: 15px;
  letter-spacing: 1.42px;
  margin-right: 200px;
  span {
      font-weight: bold;
  }
`;

function TopNav() {

    const userId = useSelector(getUserId);
    const userEmail = useSelector(getUserEmail);

    return (
        <TopNavContainer>
            <CartIcon to='/Home'>
            <LogoImg src={ image } alt="image"/>
            </CartIcon>
            {
            userId ? (
                <UserContainer>
                    <span> SIGNED IN AS: </span> { userEmail }
                </UserContainer>
            ) : (
              <UserContainer>
                  <LoginModal>
                  <span> SIGN IN TO START SHOPPING </span> 
                  </LoginModal>
              </UserContainer>
            )
          }

            <CartIcon to='/Cart'>
                <FaIcons.FaCartPlus />
                <p>12</p>
            </CartIcon>

        </TopNavContainer>
    )
}; 

export default TopNav;