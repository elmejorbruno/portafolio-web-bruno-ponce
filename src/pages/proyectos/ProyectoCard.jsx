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
     <ContainerSection>
      <ProjectTitle>Proyectos</ProjectTitle>
        <GridGaleria>
            {dataProyectos.map((project, index) => (
                <Card key={index}>
                    <CardProject>
                           {/* <ContainerImg> */}
                        <Imagen src={project.img} alt={project.alt} />
                      {/* </ContainerImg> */}
                      <OverlayProject>
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
                    </OverlayProject>
                    </CardProject>
                </Card>
            ))}
        </GridGaleria>
    </ContainerSection>
  )
}

export default ProyectoCard

const ContainerSection = styled.div`
  max-width: 1100px;
  margin: auto;
/*  
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
   
  } */
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

const GridGaleria = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
      /* background-color: transparent;
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
    
} */
`;
const Card = styled.div`
  /* width: 100%;
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
    
  }  */
`;
const CardProject = styled.div`
  position: relative;
  max-width: 350px;
  height: fit-content;
  margin: 20px;
  cursor: pointer;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 21px; */
`;


const OverlayProject = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: linear-gradient(rgba(10, 128, 104, 0.8), rgba(28, 182, 152, .8));
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0;

  &:hover{
    opacity: 1;
  }
`;

const ContainerImg = styled.div`
  /* width: 100%;
  border-radius: 8px; */
  
`;
const Imagen = styled.img`
  width: 100%;
  display: block;
  /* height: auto;
  object-fit: cover; */
`;
// const  = styled.div``;

const Title = styled.h3`
  margin-bottom: 20px;
  margin-top: 10px;
  transition: 1s;
  font-size: 1.5em;
  font-weight: 600;
  color: #fff;
`;

const ProjectTech = styled.div`

`;
const Links = styled.div``;