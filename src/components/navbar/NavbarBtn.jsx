import { LuArrowDownRight } from "react-icons/lu";
import styled from "styled-components";

const NavbarBtn = () => {
  return (
    <NavBtn > 
      Hire Me
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
    ${({ theme }) => theme.colors.cyan},
    ${({ theme }) => theme.colors.orange}
  );
  transition: transform 0.3 ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({theme }) => theme.extends.cyanShadow };
  }

`;