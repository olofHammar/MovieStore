import React from 'react';
import styled from 'styled-components';
import image from '../img/m_logo.png';

const Nav = styled.div`
  background: linear-gradient(to top, black, #15171c);
  height: 80px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 40px;
`;

const LogoImage = styled.img`
  height: 55px;
  padding-left: 35px;
`

const NavTitle = styled.h4`
  padding: 0 10px;
  font-size: 15px;
  letter-spacing: 1.42px;
`

const BottomBar = ({handleLogout}) => {

  return (
    <Nav> 
      <LogoImage src={image} /> 
      <NavTitle>ALL TIME BEST SELLERS</NavTitle>
      <NavTitle>NEW ARRIVALS</NavTitle>
      <NavTitle>COMING SOON</NavTitle>
      <NavTitle>MESSAGE BOARD</NavTitle>
    </Nav>
  );
};

export default BottomBar;