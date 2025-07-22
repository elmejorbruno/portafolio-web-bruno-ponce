import styled from "styled-components"
import NavbarBtn from "./NavbarBtn"
import NavbarLinks from "./NavbarLinks"
import NavbarLogin from "./NavbarLogin"

const NavbarMain = () => {
  return (
   
        <ContainerNav> 
            <NavWrapper>
            <NavbarLogin/>
            <NavbarLinks/>
            <NavbarBtn/>
             </NavWrapper>
        </ContainerNav>
        
   
  )
}

export default NavbarMain

const ContainerNav = styled.nav`
    width: 100%;
   
`;

const NavWrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    border: 1px solid #645559;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 1px ;
    box-shadow: 0px 1px 10px rgba(151, 154, 89, 0.5);
`;
