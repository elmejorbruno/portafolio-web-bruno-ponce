import { Link } from "react-router-dom"
import styled from "styled-components"

const Links = [
  {
    link: "About Me", 
    section: 'Sobre mi' 
  },
  {
   link: "Skills",
   section: 'Habilidades' 
  },

  {
    link: "Projects", 
    section: 'Proyectos' 
  },
  {
    link: "Contact", 
    section: 'Contacto' 
  },
  
]

const NavbarLinks = ({menuMobile}) => {

  return (
    <LinkUl menuMobile={menuMobile}>
      {Links.map((itemLink, index) => (
        <LinkLi key={index}>
          <Enlace to={itemLink.link} smooth={true} duration={500}>
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
  color: #000;
`;

const LinkLi = styled.li`
 font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
 position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
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
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.cyan};
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

`;
const Enlace = styled(Link)`
    text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;