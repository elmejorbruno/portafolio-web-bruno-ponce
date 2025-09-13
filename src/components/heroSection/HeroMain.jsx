import styled from "styled-components"
import HeroText from "./HeroText";
import HeroPic from "../heroSection/HeroPic";

const HeroMain = () => {
  return (
    <ContainerHeroMain>
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
          <a href="">Descarga CV</a>
        </BtnDescargaCv>
    </ContainerHeroMain>
  )
}

export default HeroMain

const ContainerHeroMain = styled.div`
margin-top: 6rem;
/* background-color: #09243c; */
background-color: transparent;
   width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  z-index: 10;
 
  
  @media screen and (max-width: 700px) {
    margin-top: 7rem;
  
     width: 100%; 
   }
    
`;
const WrapperHero = styled.div`
 align-items: center;
justify-content: center;
 
 
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
    width: 100%;
   
  } 
    @media screen and (max-width: 700px) {
    width: 90%;
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
   padding:  30px;
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

  a{
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    padding: .6rem;
    background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  );
  border: 1px solid cyan;
  border-radius: 20px;

  &:hover{
     background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.cyan},
    ${({ theme }) => theme.colors.black}
  );
  }
  } 
`;