import styled from "styled-components";
import HabilidadesCard from "./HabilidadesCard";

const Habilidades = () => {
  return (
 <ContainerHabilit id="Skills">
      <ContentHabiliti>
        <HabilidadesCard/>

      </ContentHabiliti>
        {/* <AboutMeImage/> */}
    </ContainerHabilit>
  )
}

export default Habilidades

const ContainerHabilit = styled.section`
  display: flex;
  justify-content:center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;

  @media (min-width: 768px) {
    
    
  }

  margin-left: auto;
  margin-right: auto;
   @media (max-width: 648px) { 
   width: 70%;
  }
    @media (max-width: 348px) { 
   width: 90%;
  }
  

  `;
  
  const ContentHabiliti = styled.div`
 
   
    @media (min-width: 580px){
      width: 70%;
      display: flex;
    } 
    
    @media (max-width: 648px) { 
      font-size: 1em;
      line-height: 1.3;
      width: 90%;
    }
  `;