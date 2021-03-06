import React from "react"
import styled from "styled-components"
import image from "../../img/m_logo.png"
import { Link } from "react-router-dom"

const Nav = styled.div`
  background: linear-gradient(to top, rgb(11, 11, 17), #15171c);
  height: 80px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 40px;

  @media (max-width: 768px) {
    height: 50px;
  }
`

const LogoImage = styled.img`
  height: 55px;
  padding-left: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavTitle = styled.h4`
  display: flex;
  width: 220px;
  height: 55px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 15px 10px;
  font-size: 15px;
  letter-spacing: 1.42px;
  cursor: pointer;

  span {
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      opacity: 0;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }

  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
    font-size: 12px;
    margin-left: 9px;
  }
`

const BottomBar = ({ handleLogout }) => {
  return (
    <Nav>
      <LogoImage src={image} />

      <Link to="/family" style={{ textDecoration: "none" }}>
        <NavTitle>
          <span>FAMILY</span>
        </NavTitle>
      </Link>

      <Link to="/myList" style={{ textDecoration: "none" }}>
        <NavTitle>
          <span>MY LIST</span>
        </NavTitle>
      </Link>

      <Link to="/collections/coming_soon" style={{ textDecoration: "none" }}>
        <NavTitle>
          <span>COMING SOON</span>
        </NavTitle>
      </Link>
    </Nav>
  )
}

export default BottomBar
