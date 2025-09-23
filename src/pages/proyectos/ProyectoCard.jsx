import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import PortafolioWeb from "../../assets/img/portafolio-collas.png";
import TecnohumanitiWeb from "../../assets/img/tecnohumaniti-web-inicio.png";
import TecnohumanitiBlog from "../../assets/img/tecnohumaniti-blog-collas.png";
import ImgWebRedes from "../../assets/img/web-redes-sociales-collas.png";

const dataProyectos = [
  {
    titulo: "Portfolio Web",
    descripcion: "Sitio personal para mostrar mis habilidades y proyectos. Desarrollado con React y Styled Components.",
    img: PortafolioWeb,
      tech: "React, vite",
    demo: "https://github.com/usuario/portfolio",
    codigo: "https://github.com/elmejorbruno/portafolio-web-bruno-ponce.git"
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
    demo: "https://www.tecnohumaniti.com/main-blog",
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
                        <Descrip>{project.descripcion}</Descrip>
                         
                         <ProjectTech>
                          <span>{project.tech}</span>
                        </ProjectTech>
                       
                    </OverlayProject>
                    <ContainerBtn>
                     <LinksBoton>
                        <a href={project.codigo}>
                            <FaGithub/> Código
                        </a>
                        <a href={project.demo}>
                            <FaExternalLinkAlt/> Demo
                        </a>
                        </LinksBoton>
                    </ContainerBtn>
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

`;

const ProjectTitle = styled.h2`
  padding: 30px 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
    text-align: center;
  }
  
`;

const GridGaleria = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

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
    
  }   */
`;
const CardProject = styled.div`
  position: relative;
  max-width: 350px;
  height: fit-content;
  margin: 20px;
  cursor: pointer;
   @media (max-width: 400px) {
  
  
  }
`;


const OverlayProject = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(28, 182, 152, .8));
  text-align: center;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  transition: 1s;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 1;
  border-radius: 10px;
  padding: 2rem 1rem;
  &:hover{
    opacity: 0;
  }  /* */
    @media (max-width: 500px) {
     letter-spacing: 1px;
  }
`;

const ContainerImg = styled.div`
  /* width: 100%;
  border-radius: 8px; */
  
`;
const Imagen = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
   height: auto;
  object-fit: cover;
`;


const Title = styled.h3`
  transition: 1s;
  font-size: 2em;
  height: 15vh;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 800;
  color: #fff;
  padding: 0 10px ;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: .4rem;
   @media (max-width: 500px) {
     font-size: 1.5em;
    
  }
   @media (max-width: 400px) { 
      height: 6vh;
      font-size: 1.3em;
    }

`;

const Descrip = styled.div`
    color: #fff;
    margin: 0px 20px;
    text-align: justify;
    
    @media (max-width: 600px) {
      font-size: 1em;
      text-align: center;
      line-height: 1.1;
      margin: 10px;
    }
`;
const ProjectTech = styled.div`
    color: #fff;
    font-size: 1em;
`;

const ContainerBtn = styled.div`

`;
const LinksBoton = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
  a{
    color: #fff;
    text-decoration: none;
    background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  );
    border: 1px solid cyan;
    gap: 10px;
    padding: 5px 10px;
    font-weight: 800;
    margin-left: 10px;
    border-radius: 10px;

    &:hover{
        background: linear-gradient(
            to top,
            ${({ theme }) => theme.colors.cyan},
            ${({ theme }) => theme.colors.black}
    );
    }
     
    @media (max-width: 600px) {
     
    }
     @media (max-width: 350px) { 
      font-size: .8em;
    }
  }

`;