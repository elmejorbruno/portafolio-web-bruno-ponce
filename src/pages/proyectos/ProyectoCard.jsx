import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import PortafolioWeb from "../../assets/img/img-portaforlio.png";
import TecnohumanitiWeb from "../../assets/img/tecnohumaniti-web.png";
import TecnohumanitiBlog from "../../assets/img/tecnohumaniti-web-blog.png";
import ImgWebRedes from "../../assets/img/img-web-redes-sociales.png";

const dataProyectos = [
  {
    titulo: "Portfolio Web",
    descripcion: "Sitio personal para mostrar mis habilidades y proyectos. Desarrollado con React y Styled Components.",
    imagen: PortafolioWeb,
    demo: "https://github.com/usuario/portfolio",
    codigo: "https://elmejorbruno.github.io/portafolio-web-bruno-ponce/"
  },
  {
    titulo: "Redes sociales",
    descripcion: "Aplicación para gestionar tareas diarias con almacenamiento local y diseño responsive.",
    imagen: ImgWebRedes,
    demo: "https://elmejorbruno.github.io/plataformas-redes/",
    codigo: "https://github.com/elmejorbruno/plataformas-redes.git"
  },
   {
    titulo: "Tecnohumaniti",
    descripcion: "Pagina web y blog personal, enfocado en tecnología y humanidades.",
    imagen: TecnohumanitiWeb,
    demo: "https://www.tecnohumaniti.com/",
    codigo: "https://elmejorbruno.github.io/plataformas-redes/"
  }
  
];
const ProyectoCard = () => {
  return (
     <ContainerCard>
      <ProjectTitle>Proyectos</ProjectTitle>
        <GridProyectos>
            {dataProyectos.map((project, index) => (
                <Card key={index}>
                    <CardContent>
                    <Imagen src={project.imagen} alt={project.alt} />
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
const Card = styled.div``;
const Imagen = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
`;
// const  = styled.div``;
const CardContent = styled.div``;
const Title = styled.div``;
const Links = styled.div``;