import styled from "styled-components"

const NavbarLogin = () => {
  return (
    <NavbarLogi>Bruno Ponce</NavbarLogi>
  )
}

export default NavbarLogin

const NavbarLogi = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.special};
  font-weight: 700;
  font-size: 20px;

`;