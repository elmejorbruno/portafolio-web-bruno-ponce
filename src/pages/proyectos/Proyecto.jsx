import styled from "styled-components"
import ProyectoCard from "./ProyectoCard";

const Proyectos = () => {
  return (
 <ContainerProject id="Projects">
      <ContentProject>
        <ProyectoCard/>
      </ContentProject>
    </ContainerProject>  )
}

export default Proyectos

const ContainerProject = styled.section`
  display: flex;
  justify-content:center;
  gap: 12px;
  max-width: 1200px;
 margin-bottom: 5rem;
  text-align: justify;

  @media (min-width: 768px) {
    flex-direction: row;
    
  }
  @media (max-width: 648px) { 
    flex-direction: column; 
  }
  margin-left: auto;
  margin-right: auto;
  /* gap-12
  px-4 */
  /* max-w[1200px]
  
  mt-[100px] */
  
  align-items: center;
  `;
  
  const ContentProject = styled.div`
   font-size: 1.2em;
   line-height: 1.5;
   @media (min-width: 1150px) {
     width: 70%;
   }

   @media (max-width: 1150px) { 
    width: 80%;
  }
   @media (max-width: 400px) { 
      width: 90%;
    }
  `;