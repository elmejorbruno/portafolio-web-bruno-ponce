import styled from "styled-components"
// import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <ContainerAbout id="AboutMe">
      <ContentAbout>
        <AboutMeText/>

      </ContentAbout>
        {/* <AboutMeImage/> */}
    </ContainerAbout>
  )
}

export default AboutMeMain

const ContainerAbout = styled.section`
  display: flex;
  justify-content:center;
  gap: 12px;
  max-width: 1200px;
 
  text-align: justify;
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 648px) { 
    flex-direction: column; 
   
  }

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

    @media (max-width: 648px) { 
      font-size: 1em;
      line-height: 1.3;
      width: 90%;
    }
  `;