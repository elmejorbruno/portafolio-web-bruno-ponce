import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import PortafolioWeb from "../../assets/img/img-portaforlio.png";
import TecnohumanitiWeb from "../../assets/img/tecnohumaniti-web.png";
import TecnohumanitiBlog from "../../assets/img/collas-blog-tecnohumaniti.png";
import ImgWebRedes from "../../assets/img/img-web-redes-sociales.png";

const dataProyectos = [
  {
    titulo: "Portfolio Web",
    descripcion: "Sitio personal para mostrar mis habilidades y proyectos. Desarrollado con React y Styled Components.",
    img: PortafolioWeb,
      tech: "React, vite",
    demo: "https://github.com/usuario/portfolio",
    codigo: "https://elmejorbruno.github.io/portafolio-web-bruno-ponce/"
  },
  {
    titulo: "Redes sociales",
    descripcion: "Aplicación para gestionar tareas diarias con almacenamiento local y diseño responsive.",
    img: ImgWebRedes,
       tech: "HTML, CSS",
    demo: "https://elmejorbruno.github.io/plataformas-redes/",
    codigo: "https://github.com/elmejorbruno/plataformas-redes.git"
  },
   {
    titulo: "Tecnohumaniti",
    descripcion: "Pagina web y blog personal, enfocado en tecnología y humanidades.",
    img: TecnohumanitiWeb,
      tech: "React, vite",
    demo: "https://www.tecnohumaniti.com/",
    codigo: "https://elmejorbruno.github.io/plataformas-redes/"
  },
     {
    titulo: "Tecnohumaniti Blog",
    descripcion: "Blog personal, enfocado en noticias y reflaxiones sobre tecnologias con un enfoque humanista.",
    img: TecnohumanitiBlog,
    tech: "React, vite",
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
                           <ContainerImg>
                        <Imagen src={project.img} alt={project.alt} />
                      </ContainerImg>

                        <Title>{project.titulo}</Title>
                        <descripcion>{project.descripcion}</descripcion>
                         
                         <ProjectTech>
                          <span>{project.tech}</span>
                        </ProjectTech>
                        <Links>
                        <a href={project.codigo}>
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
 
     background-color: transparent;
    @media (min-width: 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  @media (min-width: 768px) { 
    align-items: start;
    text-align: center;
  }
  @media (max-width: 640px) { 
    align-items: center;
   
  }
`;

const ProjectTitle = styled.h2`
  padding: 30px 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
  }
`;

const GridProyectos = styled.div`
      background-color: transparent;
@media (min-width: 480px){

    padding: 10px;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
}
@media (min-width: 680px){
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
    
}
`;
const Card = styled.div`
   width: 100%;
    display: block;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    text-align: center;
    padding: 10px;
     box-shadow: 5px 3px 22px rgba(9, 97, 14, 0.4);

    @media (min-width: 480px){
      width: 100%;
      gap: 10px;
      
    }
    
    
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
    border-bottom: 2px solid #09610E;
    transform: translateY(-5px);
    box-shadow: 10px 3px 22px rgba(0,0,0,0.1);
    
  } 
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 21px;
`;
const ContainerImg = styled.div`
  width: 100%;
  border-radius: 8ox;
  
`;
const Imagen = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
// const  = styled.div``;

const Title = styled.div``;

const ProjectTech = styled.div`

`;
const Links = styled.div``;