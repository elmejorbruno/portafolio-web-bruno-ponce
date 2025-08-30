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
    </ContainerHeroMain>
  )
}

export default HeroMain

const ContainerHeroMain = styled.div`
margin-top: 4rem;
/* background-color: #09243c; */
background-color: transparent;
   width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center; 
  z-index: 10;
 
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
    display: flex;
    align-items: stretch;
    justify-content: center;
  
     width: 100%;
   }
    
`;
const WrapperHero = styled.div`
 display: flex;
 width: 100%;

 margin: 20px 0;
 justify-content: space-between;
 align-items: center;
 position: relative;
 background-color: transparent;
 flex-direction: column;

 
 @media screen and (min-width: 700px) {
    max-width: 1200px;
    width: 70%;
    height: 50vh;
    margin: 20rem 0;
    padding: 2rem;
    display: flex;
   flex-direction: row;
  
  }
`;

const ContainerText = styled.div`
  width: 80%;
  display: flex;
 padding: 30px;
 background-color: transparent;
  @media screen and (max-width: 700px) {
    width: 100%;
   padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerPicture = styled.div`
  width: 100%;
  max-width: 700px;
  height: 30vh;
 background-color:transparent;
   display: flex;
  justify-content: center;
  align-items: center;
  right:5px;
  @media screen and (min-width: 700px) {
    width: 100%;
    height: 100vh;
   
   }
`;