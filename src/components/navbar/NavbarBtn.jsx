import { LuArrowDownRight } from "react-icons/lu";
import styled from "styled-components";

const NavbarBtn = () => {
  return (
    <NavBtn > 
      <Botton><a href="">Contacto</a></Botton>
      <LuArrowDownRight/>
    </NavBtn>
  )
}

export default NavbarBtn

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white };
  border: 1px solid cyan;

  
background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  );
  transition: transform 0.3 ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({theme }) => theme.extends.cyanShadow };
  }
  @media screen and (max-width: 700px) {
    display: none;
  }

`;
 const Botton= styled.div`

 a{
   list-style: none;
  text-decoration: none;
  color: #fff;
 }
 
    `;