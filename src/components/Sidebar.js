import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserId } from '../features/userSlice';
import LoginModal from '../components/LoginModal';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import image from '../img/m_logo.png';

const TopNavContainer = styled.div`
  background: black;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right 20px;
  padding-left: 10px;
`;

const CartIcon = styled(Link)`
  font-size: 1.2rem;
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
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 15px;
  letter-spacing: 1.42px;
  span {
      font-weight: bold;
      padding-right: 5px;
  }
`;

const Nav = styled.div`
  background: linear-gradient(to top, black, #15171c);
  height: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
  border-top: 2px solid #15171c;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const NavIconSignIn = styled(Link)`
  margin-top: 320px;
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
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const NavIconSignInText = styled.p`
  display: flex;
  margin-left: 13px;
`;

const NavIconSignOut = styled(Link)`
  margin-top: 325px;
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
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const NavIconSignOutText = styled.p`
  display: flex;
  margin-left: 13px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  background: linear-gradient(65deg, black, #15171c);
`;

const LogoImage = styled.img`
  height: 50px;
  padding-top: 15px;
`

function Sidebar({ handleLogout}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const userId = useSelector(getUserId);
    const userEmail = useSelector(getUserEmail);

    return (
        <TopNavContainer>
               <IconContext.Provider value={{ color: '#fff' }}>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

        <SidebarNav sidebar={sidebar}>

          <SidebarWrap>

            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
              })}

              {
              userId ? (
                
                <NavIconSignOut onClick={handleLogout}>
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
              )
            }

          </SidebarWrap>

        </SidebarNav>
        
      </IconContext.Provider>
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

export default Sidebar;
