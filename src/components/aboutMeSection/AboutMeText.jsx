import styled from "styled-components";

const AboutMeText = () => {
  return (
    <ContainerText>
      <AboutTitle>Sobre Mi</AboutTitle>
      <ParrafoAbout>Soy programador web con dos años de experiencia desarrollando sitios y aplicaciones interactivas. He trabajado en proyectos donde diseño con un enfoque en la experiencia del usuario, la navegación fluida y el diseño responsive, asegurando que se vea y funcione bien en cualquier dispositivo.</ParrafoAbout>



    </ContainerText>
  )
}

export default AboutMeText

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
background-color: transparent;
  @media (min-width: 768px) { 
    align-items: start;
    text-align: center;
  }
  @media (max-width: 640px) { 
    align-items: center;
    text-align: left;
  }
`;

const AboutTitle = styled.div`
  padding: 2rem 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
    padding: 1rem;
  }
`;

const ParrafoAbout = styled.div`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.special};
`;