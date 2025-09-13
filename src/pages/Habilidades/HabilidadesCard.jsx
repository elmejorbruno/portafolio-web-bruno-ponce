import styled from "styled-components";
import { dataHabilidades } from "../../components/data/Datahabilidades";

const HabilidadesCard = () => {
  return (
    <ContainerCard>
      <Title>Habilidades</Title>
         <CardContent> 
          <GridHabilidades>
            {dataHabilidades.map((hab, index) => (
                
                  <Card key={index}>
                
                   <Icon>{hab.icono}</Icon> 
                    <Nombre>{hab.nombre}</Nombre>
                
                </Card>
               
            ))}
        </GridHabilidades> 
        </CardContent>
    </ContainerCard>
  )
}

export default HabilidadesCard

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

const Title = styled.h2`
   padding: 30px 0;
  font-size: 2.2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
  color: #056a5e;
   @media (max-width: 640px) { 
    font-size: 1.7em;
  }
`;
const GridHabilidades = styled.div`
width: 100%;
    background-color: transparent;
  
@media (min-width: 480px){

    padding: 10px;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
}
@media (min-width: 680px){
    width: 80%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
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
    text-align: center;
    border-left: 5px solid cyan;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 10px 3px 22px rgba(0,0,0,0.1);
@media (min-width: 480px){
   width: 100%;
   gap: 10px;
    
}
    

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    
  } 
`;
const CardContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 21px;
`;
const Icon = styled.div`
    padding: 10px;
    width: 100%;
  /* Tamaño en escritorio */
  font-size: 3.5rem;

  /* Tamaño en tablet */
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  /* Tamaño en móvil */
  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;


const Nombre = styled.p`
  margin-top: 10px;
  font-weight: 500;
  color: #333;
    font-size: 2em;
     @media (max-width: 640px) {
    font-size: 1.3em; /* más pequeño en móviles */
  }
`;
