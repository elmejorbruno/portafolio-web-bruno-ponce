import styled from "styled-components"
import NavbarBtn from "./NavbarBtn"
import NavbarLinks from "./NavbarLinks"
import NavbarLogin from "./NavbarLogin"

const NavbarMain = () => {
  return (
    <div>
        <Nav>
            <NavbarLogin/>
            <NavbarLinks/>
            <NavbarBtn/>
        </Nav>
        
    </div>
  )
}

export default NavbarMain

const Nav = styled