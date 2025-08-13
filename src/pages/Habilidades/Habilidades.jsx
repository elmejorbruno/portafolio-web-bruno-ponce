import styled from "styled-components";
import HabilidadesCard from "./HabilidadesCard";

const Habilidades = () => {
  return (
 <ContainerHabilit>
      <ContentHabiliti>
        <HabilidadesCard/>

      </ContentHabiliti>
        {/* <AboutMeImage/> */}
    </ContainerHabilit>
  )
}

export default Habilidades

const ContainerHabilit = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;

  @media (min-width: 768px) {
    
    
  }
  @media (max-width: 648px) { 
   
  }
  margin-left: auto;
  margin-right: auto;
 
  

  `;
  
  const ContentHabiliti = styled.div`
    width: 90%;
    background-color:transparent;
   @media (min-width: 580px){
   width: 70%;
   display: flex;
    align-items: center;
    justify-content: center;
   
}
  `;