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

const ContainerAbout = styled.div``;