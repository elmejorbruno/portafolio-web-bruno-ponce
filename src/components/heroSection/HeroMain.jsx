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
background-color: #fff;
  /* width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center; */
  z-index: 10;
 
  
  @media screen and (max-width: 700px) {
    /* flex-direction: column;
    display: flex;
    align-items: stretch;
    justify-content: center;
    background-color: gray;
     width: 50%;
  height: 80vh; */
 
  height: 60vh
   }
    
`;
const WrapperHero = styled.div`
 display: flex;
 max-width: 1200px;
 margin: 0 auto;
 justify-content: space-between;
 align-items: center;
 position: relative;
  background-color: transparent;
  flex-direction: column;
 
  @media screen and (min-width: 700px) {
    width: 70%;
    padding: 1rem;
    display: flex;
   flex-direction: row;
  
  }
`;

const ContainerText = styled.div`
  width: 50%;
  display: flex;
 
 padding: 30px;
  @media screen and (max-width: 700px) {
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerPicture = styled.div`
  width: 100%;
  max-width: 600px;
  height: 30vh;
 background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  right:5px;
  @media screen and (min-width: 700px) {
    width: 60%;
    height: 50vh;
   }
`;