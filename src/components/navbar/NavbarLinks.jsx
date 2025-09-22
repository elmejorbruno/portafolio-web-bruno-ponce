
import {Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

const Links = [
  {
    id: "Home",
    link: "Home", 
    section: 'Inicio' 
  },
  {
    id: "AboutMe",
    link: "About Me", 
    section: 'Sobre mi' 
  },
  {
    id: "Skills",
   link: "Skills",
   section: 'Habilidades' 
  },
  
  {
    id: "Projects",
    link: "Projects", 
    section: 'Proyectos' 
  },
 
  
]

const NavbarLinks = ({menuMobile}) => {

  return (
    <LinkUl menuMobile={menuMobile}>
      {Links.map((itemLink, index) => (
        <LinkLi key={index}>
          <Enlace to={itemLink.id}
           smooth={false}
           
            >
            {itemLink.section}
          </Enlace>
        </LinkLi>
      ))}
      
    </LinkUl>
  )
}

export default NavbarLinks

const LinkUl = styled.ul`
display: flex;
flex-direction: ${({ menuMobile }) => (menuMobile ? "column" : "row")};
  gap: 2rem;
  list-style: none;
  color: #fff;
`;

const LinkLi = styled.li`
 font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
 position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 40%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.cyan};
    transition: transform 0.3s ease;
  }
    @media (max-width: 640px) {
    width: 100%;
  
    
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

`;
const Enlace = styled(ScrollLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.colors.cyan};
    }
    `;
   
