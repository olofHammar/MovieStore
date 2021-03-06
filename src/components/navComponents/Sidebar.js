import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import { useSelector } from "react-redux"
import { getUserEmail, getUserId } from "../../features/userSlice"
import LoginModal from "../../modals/LoginModal"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./SidebarData"
import SubMenu from "./SubMenu"
import { IconContext } from "react-icons/lib"

const TopNavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgb(11, 11, 17), #15171c);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right 20px;
  padding-left: 10px;
  z-index: 10;
`

const CartIconContainer = styled(Link)`
  font-size: 1.7rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-decoration: none;

  p {
    padding-left: 10px;
    color: orange;
  }

  &:hover {
    color: white;
  }
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`

const NavIconSignIn = styled.div`
  margin-top: 285px;
  font-size: 20px;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: #252831;
    color: white;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 50%;
  }
`

const NavIconSignInText = styled.p`
  display: flex;
  margin-left: 13px;
`

const NavIconSignOut = styled(Link)`
  margin-top: 290px;

  padding-left: 20px;
  font-size: 20px;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: #252831;
    color: white;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 50%;
  }
`

const NavIconSignOutText = styled.p`
  display: flex;
  margin-left: 13px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
  background: linear-gradient(65deg, rgb(11, 11, 17), #15171c);
`

const InfoContainer = styled.div`
  color: white;
  letter-spacing: 1.43px;
  margin-bottom: 15px;
  margin-left: 5px;
  span {
    font-size: 0.8rem;
  }
  h4 {
    font-size: 1rem;
    padding-bottom: 2px;
  }
`

const InfoContainerSignIn = styled.div`
  letter-spacing: 1.43px;
  margin-bottom: 15px;
  margin-left: -10px;
  span {
    font-size: 0.8rem;
  }
  h4 {
    font-size: 1rem;
    padding-bottom: 2px;
  }
`

function Sidebar({ handleLogout, cartItems }) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const userId = useSelector(getUserId)
  const userEmail = useSelector(getUserEmail)

  const getCount = () => {
    let count = 0

    cartItems.forEach((item) => {
      //console.log(item.data.quantity);
      count += item.data.quantity
    })
    return count
  }

  return (
    <TopNavContainer>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} showSidebar={showSidebar} />
              )
            })}

            {userId ? (
              <NavIconSignOut onClick={handleLogout} to="/">
                <Container>
                  <FaIcons.FaSignOutAlt />
                  <NavIconSignOutText>Sign out</NavIconSignOutText>
                </Container>
              </NavIconSignOut>
            ) : (
              <NavIconSignIn>
                <LoginModal>
                  <Container>
                    <FaIcons.FaSignInAlt />
                    <NavIconSignInText>Sign in</NavIconSignInText>
                  </Container>
                </LoginModal>
              </NavIconSignIn>
            )}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>


      {userId ? (
        <CartIconContainer to="/">
          <FaIcons.FaUser />
          <InfoContainer >
            <span>ACCOUNT</span>
            <h4>{userEmail}</h4>
          </InfoContainer>
        </CartIconContainer>
      ) : (
        <CartIconContainer to="/">
          <FaIcons.FaUser />
          <LoginModal>
            <InfoContainerSignIn>
              <span>ACCOUNT</span>
              <h4>Sign in here</h4>
            </InfoContainerSignIn>
          </LoginModal>
        </CartIconContainer>
      )}

      <CartIconContainer to="/Cart">
        <FaIcons.FaCartPlus />
        <p>{getCount()}</p>
      </CartIconContainer>
    </TopNavContainer>
  )
}

export default Sidebar
