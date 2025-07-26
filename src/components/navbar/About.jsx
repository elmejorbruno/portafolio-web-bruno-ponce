import styled from "styled-components"


const About = () => {
  return (
    <ContainerAbout>About</ContainerAbout>
  )
}

export default About

const ContainerAbout = styled.div`
    width: 100%;
    background-color: transparent;
    height: 60vh;
    display: flex;
    padding: 30px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
`;