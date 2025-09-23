import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import styled from "styled-components"

const Footer = () => {
  return (
    <ContainerFooter>
      <RedesFooter>
        REDES SOCIALES
         <RedesSocial>
            <RedesLinks>
             <a href="https://www.facebook.com/bruno.ponce.dev">
              <FaFacebookF/>
             </a>
             <a href="https://linkedin.com/in/tuPerfil"  rel="noopener noreferrer">
               <FaLinkedinIn  />
             </a>
             <a href="mailto:https:poncbruno@gmail.com">
                <MdEmail  />
              </a>
              <a href="https://www.tiktok.com/@tuUsuario" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              </RedesLinks>
            </RedesSocial>
      </RedesFooter>

      <TextFooter>
         &copy;{new Date().getFullYear()}, Código. Todos los derechos reservados
      </TextFooter>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
   width: 100%;
    background-color: #16191d;
    height:20vh;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    font-size: 1em;
    font-weight: bold;
    text-align:center;
    justify-content: center;
`;




const RedesFooter = styled.div`
 
 text-align: center;
  background-color: transparent;
  height: 30vh;
  color: #fff;
  background-color: transparent;
  padding: 10px;
`;
const RedesSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  
`;

const  RedesLinks = styled.div`
  font-size:  20px;
  display: flex;
  flex-direction: row;
  border: none; 
   a{
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 50px;
    transition: transform 0.2s ease;

      &:hover{
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
      }
      padding: 5px;
      @media screen and (max-width: 700px) {
   
    font-size: .5em;

   }
    }
`;
const TextFooter = styled.div`
  border-top: 1px solid;
  color: #fff;
  padding: 10px;
  align-items: center;
  background-color:#16191d;
`;