import styled from "styled-components";

const AboutMeText = () => {
  return (
    <ContainerText>
      <AboutTitle>Sobre Mi</AboutTitle>
      <ParrafoAbout>Soy desarrollador/a Frontend con 2 años de experiencia creando interfaces modernas, funcionales y enfocadas en la experiencia del usuario. He trabajado especialmente en áreas como backend, optimización SEO, accesibilidad y buenas prácticas de desarrollo web, el rendimiento en la web y la integración de herramientas como Google Analytics, Tag Manager y control de versiones con Git. desarrollando desde sitios informativos hasta aplicaciones web interactivas.</ParrafoAbout>

<ParrafoAbout>Durante este tiempo, he aprendido a convertir ideas en soluciones digitales funcionales, adaptándome a los retos del diseño responsive. Aunque mi enfoque principal ha sido el desarrollo Frontend, me encuentro en constante aprendizaje para ampliar mis habilidades, Me gusta investigar, experimentar y seguir creciendo profesionalmente.</ParrafoAbout>


    </ContainerText>
  )
}

export default AboutMeText

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

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
  padding: 30px 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
  }
`;

const ParrafoAbout = styled.div`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.special};
`;