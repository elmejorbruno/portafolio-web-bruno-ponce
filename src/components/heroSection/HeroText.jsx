import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components"

const HeroText = () => {
  return (
    <ContainerText>
        <TitleH2>Front-End Web Developer</TitleH2>
        <TitleH1>Bruno Ponce</TitleH1>
        <Parrafo>Creador de paginas web</Parrafo>
        <RedesSocial>
          <a href="">
          <FaFacebookF/>
          </a>
          <a href="mailto:"></a>
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
    background-color: transparent;
      @media screen and (max-width: 700px) {
   text-align: center;
   }
   
`;

const TitleH2 = styled.h2`
    color: ${({ theme }) => theme.colors.cyan};
    font-size: 2em;
    text-transform: uppercase;
      @media screen and (max-width: 700px) {
        font-size: 1em;

   }
    `;
const TitleH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts. special};
   font-size: 3em;
   font-weight: bold;
   color: #fff;
     @media screen and (max-width: 700px) {
   
    font-size: 2em;

   }

`;

const Parrafo = styled.div`
`;
const RedesSocial = styled.div`

`;