import styled from "styled-components"
import HeroText from "./HeroText";
import HeroGradient from "./HeroGradient";
import HeroPic from "./HeroPic";

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
  width: 100%;
  height: 60vh;
  background-color: #09243c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
 overflow: hidden;
  position: relative;
  @media screen and (max-width: 700px) {
    /* flex-direction: column;
    display: flex;
    align-items: stretch;
    justify-content: center;
    background-color: gray;
     width: 50%;
  height: 80vh; */
  overflow: hidden;
   }
    
`;
const WrapperHero = styled.div`
 
  background-color: transparent;
  width: 100%; 
 
  display: flex;
  @media screen and (min-width: 700px) {
    width: 70%;
    padding: 1rem;
    display: flex;
   
  
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
  width: 70%;
   

   right:5px;
  @media screen and (max-width: 700px) {
    width: 60%;
    position: absolute;
    top: -15rem;
   }
`;