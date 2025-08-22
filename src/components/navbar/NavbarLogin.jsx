import styled from "styled-components"

const NavbarLogin = () => {
  return (
    <NavbarLogi>Bruno Ponce</NavbarLogi>
  )
}

export default NavbarLogin

const NavbarLogi = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1.5em;
  }
`;