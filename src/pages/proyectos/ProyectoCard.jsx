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
                        <Descrip>{project.descripcion}</Descrip>
                         
                         <ProjectTech>
                          <span>{project.tech}</span>
                        </ProjectTech>
                       
                    </OverlayProject>
                    
                     <Links>
                        <a href={project.codigo}>
                            <FaGithub/> Código
                        </a>
                        <a href={project.demo}>
                            <FaExternalLinkAlt/> Demo
                        </a>
                        </Links>

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
  font-size: 3em;
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
        background-color: aqua;
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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(28, 182, 152, .8));
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 1;
  border-radius: 10px;
  &:hover{
    opacity: 0;
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
  /* height: auto;
  object-fit: cover; */
`;
// const  = styled.div``;

const Title = styled.h3`
  margin-bottom: 20px;
  transition: 1s;
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 800;
  color: #fff;
  padding: 0 10px ;
  
`;

const Descrip = styled.div`
    color: #fff;
    margin: 5px 20px;
    text-align: justify;
`;
const ProjectTech = styled.div`
    color: #fff;
    font-size: 1em;
`;
const Links = styled.div`
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
  }

`;