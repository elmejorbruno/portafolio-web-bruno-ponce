import styled from "styled-components";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogin from "./NavbarLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <ContainerNav>
      <NavWrapper>
        <NavbarLogin />
        <MenuMobileWrapper menuOpen={menuOpen}>
          <NavbarLinks menuMobile={menuOpen} />
        </MenuMobileWrapper>
        {/* <ContainerLink menuOpen={menuOpen}>

            <NavbarLinks/>
            </ContainerLink> */}
      </NavWrapper>
      <ContenIconMenu>
        <ButtoMenu onClick={toggleMenu}>
          <GiHamburgerMenu />
        </ButtoMenu>
      </ContenIconMenu>
    </ContainerNav>
  );
};

export default NavbarMain;

const ContainerNav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  gap: 4px;
  z-index: 100;
  @media screen and (max-width: 824px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavWrapper = styled.div`
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  padding: 20px 40px;
  @media screen and (min-width: 824px) {
    background-color: rgba(0, 255, 255, 0.3);
  }
`;

const ContenIconMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-right: 20px;
  border-radius: 9999px;

  color: #fff;
  @media screen and (min-width: 824px) {
    display: none;
  }
`;
const ButtoMenu = styled.button`
  background-color: transparent;
  color: #000;
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 15px;
  justify-content: center;
  font-size: 25px;
  text-align: center;
  display: flex;
  box-shadow: 0px 1px 10px rgba(206, 208, 178, 0.5);
`;

// const ContainerLink = styled.div`

// display: none;
//  @media (min-width: 824px) {
//   display: block;
//  }

//  ${({ menuOpen }) => `
//     @media (min-width: 840px) and (max-width: 1023px) {
//       display: ${menuOpen ? 'block' : 'none'};
//     }
//   `}
// `;

const MenuMobileWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  background-color: rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(16px);
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1.25em;
  z-index: 80;
  @media (min-width: 824px) {
    position: relative;
    display: flex !important;
    flex-direction: row;
    top: auto;
    left: auto;
    transform: none;
    background-color: transparent;
    backdrop-filter: none;
    width: auto;
    font-size: 1rem;
    padding: 0;
  }
`;
