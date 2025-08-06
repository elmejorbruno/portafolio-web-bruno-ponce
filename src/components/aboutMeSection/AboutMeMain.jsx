import styled from "styled-components"
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <ContainerAbout>
        <AboutMeText/>
        <AboutMeImage/>
    </ContainerAbout>
  )
}

export default AboutMeMain

const ContainerAbout = styled.div`
  display: flex;
  justify-content:space-between;
  gap: 12px;
  max-width: 1200px;
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