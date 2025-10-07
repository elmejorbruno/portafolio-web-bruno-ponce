import styled from "styled-components"
import HeroText from "./HeroText";
import HeroPic from "../heroSection/HeroPic";

const HeroMain = () => {
  return (
    <ContainerHeroMain id="Home">
      <WrapperHero>
      <ContainerText>
        <HeroText/>

      </ContainerText>
        {/* <HeroGradient/> */}
        <ContainerPicture>

        <HeroPic/>  
        </ContainerPicture>
      
        </WrapperHero>
          <BtnDescargaCv>
            <a className="curriculo-no-tecnico" href="/Curriculum-no-tecnico.pdf" title="Currículo no técnico">
              Descarga CV
            </a>
            <a className="curriculo-tecnico" href="/curriculum-CV-Tecnico.pdf"   title="Currículo técnico">
              Descarga CV
            </a>
          </BtnDescargaCv>

    </ContainerHeroMain>
  )
}

export default HeroMain

const ContainerHeroMain = styled.div`
margin-top: 2rem;
/* background-color: #09243c; */
background-color: transparent;
   width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  z-index: 10;
 margin-bottom: 1rem;
  
  @media screen and (max-width: 700px) {
 
     width: 100%; 
   }
    
`;
const WrapperHero = styled.div`
 align-items: center;
justify-content: center;
 
 /* background-color:yellow; */
 @media screen and (min-width: 700px) {
   justify-content: space-between;
     max-width: 1200px;
    width: 70%;
    height: 55vh;
   /* margin: 20rem 0;*/
    padding: 2rem;
    display: flex;
  
  
  } 
    @media screen and (max-width: 1000px) {
    width: 95%;
   
  } 
    @media screen and (max-width: 700px) {
    width: 90%;
    flex-direction: row;
  } 
    @media screen and (max-width: 500px) {
    width: 100%;
    flex-direction: row;
   
  } 
`;

const ContainerText = styled.div`
flex: 1;
 width: 80%;
 background-color: transparent;


 /*   display: flex;
 padding: 30px;
 background-color: transparent;
*/
  @media screen and (max-width: 700px) {
    width: 100%;
   padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;

const ContainerPicture = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media screen and (min-width: 700px) {
  width: 100%;
  
}
@media screen and (max-width: 1200px) {
  width: 100%;
  
}  /* */


`;
const BtnDescargaCv = styled.div`

  width: 100%;
  height: 13vh;
   display: flex;
   align-items: center;
   justify-content: center;
  gap: 10px;
  a {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    padding: .6rem 1rem;
  
  border: 1px solid cyan;
  border-radius: 20px;
  transition:  all 0.3s ease-in-out;

   }
  .curriculo-no-tecnico{
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  );
  &:hover{
     background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.cyanBlack},
    ${({ theme }) => theme.colors.black}
  );
  }
  
 
   @media screen and (max-width: 500px) {
     font-size: 1rem;
      padding: .8rem;
    } 
  } 
    .curriculo-tecnico{
     background: linear-gradient(
          to left,
          ${({ theme }) => theme.colors.black},
          ${({ theme }) => theme.colors.cyanBlack}
        );
        &:hover {
         background: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.cyanBlack},
          ${({ theme }) => theme.colors.grey}
        );
      }
  
 
   @media screen and (max-width: 500px) {
     font-size: 1rem;
      padding: .8rem;
    } 
  } 
  
`;