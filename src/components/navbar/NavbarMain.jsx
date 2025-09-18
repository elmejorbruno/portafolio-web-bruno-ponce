import styled from "styled-components";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogin from "./NavbarLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

   // Cierra el menú al cambiar a escritorio
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <HeaderWrapper>
      <ContainerNav>
        <NavWrapper>
          <NavbarLogin />
          <MenuMobileWrapper menuOpen={menuOpen}>
            <NavbarLinks menuMobile={menuOpen} />
          </MenuMobileWrapper>
          <NavbarBtn />
          {/* <ContainerLink menuOpen={menuOpen}>

              <NavbarLinks/>
              </ContainerLink> */}
        </NavWrapper>
        <ContenIconMenu>
          <ButtoMenu onClick={toggleMenu}>
            {menuOpen ? <IoMdClose/> : <GiHamburgerMenu /> }
          </ButtoMenu>
        </ContenIconMenu>
      </ContainerNav>
    </HeaderWrapper>
  );
};

export default NavbarMain;

const  HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
z-index: 100; 
`;
const ContainerNav = styled.nav`
  
  gap: 4px;
   background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.cyan},
    ${({ theme }) => theme.colors.black}
  );

  @media screen and (max-width: 824px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
text-align: center;
align-items: center;

  padding: 20px 40px;
  @media screen and (min-width: 824px) {
    /* background-color: #056a5e; */
  
  border-bottom: 1px solid cyan;
  }
`;

const ContenIconMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-right: 20px;
  border-radius: 9999px;
  z-index: 100;
  color: #fff;
  @media screen and (min-width: 824px) {
    display: none;
  }
`;
const ButtoMenu = styled.button`
background-color: blue;
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
  @media screen and (max-width: 700px) {
    padding: 10px;
    font-size: 20px;
  }
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
  text-align: left;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  left: 20rem;
  transform: translateX(-50%);
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  background-color: rgba(32, 101, 101, 0.7);
  backdrop-filter: blur(10px);
  width:  50%;
 
  padding: 3rem 3rem;
  font-size: 1.25em;
 
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
