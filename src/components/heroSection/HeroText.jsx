import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components"

const HeroText = () => {
  return (
    <ContainerText>
        <TitleH2>  Desarrollador Web Front-End</TitleH2>
        <TitleH1>Bruno Ponce</TitleH1>
        <Parrafo>Creador de páginas web</Parrafo>
        <RedesSocial>
          <ContactRedes>
            Contacto
          </ContactRedes>
           <RedesLinks>
          <a href="">
          <FaFacebookF/>
          </a>
           <a href="https://linkedin.com/in/tuPerfil" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn  />
          </a>
          <a href="mailto:https://mail.google.com/mail/u/0/#inbox">
            <MdEmail  />
          </a>
          <a href="https://www.tiktok.com/@tuUsuario" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          </RedesLinks>
        </RedesSocial>
    </ContainerText>
  )
}

export default HeroText

const ContainerText = styled.div`
    display: flex;
    width: 100%;
    gap: 4px;

    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color:red;
      @media screen and (max-width: 700px) {
   text-align: center;
   
   }
   
`;

const TitleH2 = styled.h2`
    color: ${({ theme }) => theme.colors.predeter};
    font-size: 3em;
    text-transform: uppercase;
      @media screen and (max-width: 700px) {
        font-size: 1.5em;

   }
    `;
const TitleH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts. special};
   font-size: 3em;
   font-weight: bold;
   color: #000;
     @media screen and (max-width: 700px) {
   
    font-size: 2em;

   }

`;

const Parrafo = styled.div`
 
`;
const RedesSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    margin: 10px 0;
    background-color: transparent;
  
`;

const  RedesLinks = styled(Link)`
  font-size:  30px;
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
      &:hover{
        background-color: #000;
        color: #fff;
      }
      border-radius: 50px;
      padding: 10px;
      @media screen and (max-width: 700px) {
   
    font-size: .5em;

   }
    }
`;

const ContactRedes = styled.h3`
    font-family: ${({ theme }) => theme.fonts.body};
 color: #056a5e;
 font-size: 1.5em;
 margin: 10px 0;
`;
