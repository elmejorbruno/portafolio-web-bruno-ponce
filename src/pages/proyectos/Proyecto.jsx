import styled from "styled-components"
import ProyectoCard from "./ProyectoCard";

const Proyectos = () => {
  return (
 <ContainerAbout>
      <ContentAbout>
        <ProyectoCard/>
      </ContentAbout>
    </ContainerAbout>  )
}

export default Proyectos

const ContainerAbout = styled.div`
  display: flex;
  justify-content:center;
  gap: 12px;
  max-width: 1200px;
  padding: 30px;
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
  
  const ContentAbout = styled.div`
    width: 70%;
   font-size: 1.2em;
   line-height: 1.5;
  `;