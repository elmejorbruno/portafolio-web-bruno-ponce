import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const dataProyectos = [
  {
    titulo: "Portfolio Web",
    descripcion: "Sitio personal para mostrar mis habilidades y proyectos. Desarrollado con React y Styled Components.",
    imagen: "/img/portfolio.png",
    demo: "https://miportfolio.com",
    codigo: "https://github.com/usuario/portfolio"
  },
  {
    titulo: "App de Tareas",
    descripcion: "Aplicación para gestionar tareas diarias con almacenamiento local y diseño responsive.",
    imagen: "/img/todoapp.png",
    demo: "https://todoapp.com",
    codigo: "https://github.com/usuario/todoapp"
  }
];
const ProyectoCard = () => {
  return (
     <ContainerCard>
      <ProjectTitle>Proyectos</ProjectTitle>
        <GridProyectos>
            {dataProyectos.map((project, index) => (
                <Card key={index}>
                    <imagen src={project.imagen} alt={project.alt}/>
                    <CardContent>
                        <Title>{project.titulo}</Title>
                        <descripcion>{project.descripcion}</descripcion>
                        <Links>
                        <a href={ProyectoCard.codigo}>
                            <FaGithub/> Código
                        </a>
                        <a href={project.demo}>
                            <FaExternalLinkAlt/> Demo
                        </a>
                        </Links>

                    </CardContent>
                </Card>
            ))}
        </GridProyectos>
    </ContainerCard>
  )
}

export default ProyectoCard

const ContainerCard = styled.div`
 
  width: 100%;
  margin-top: 40px;
  padding: 10px;

  @media (min-width: 768px) { 
    align-items: start;
    text-align: center;
  }
  @media (max-width: 640px) { 
    align-items: center;
   
  }
`;

const ProjectTitle = styled.div`
  padding: 30px 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
  }
`;

const GridProyectos = styled.div``;
// const  = styled.div``;
const Card = styled.div``;
const CardContent = styled.div``;
const Title = styled.div``;
const Links = styled.div``;