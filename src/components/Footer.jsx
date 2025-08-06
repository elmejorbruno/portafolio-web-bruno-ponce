import styled from "styled-components"

const Footer = () => {
  return (
    <ContainerFooter>
      <RedesFooter>
        REDES SOCIALES
      </RedesFooter>
      <TextFooter>
         &copy;{new Date().getFullYear()}, Código. Todos los derechos reservados
      </TextFooter>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
   width: 100%;
    background-color: #16191d;
    height:20vh;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    font-size: 1em;
    font-weight: bold;
    text-align:center;
    justify-content: center;
`;

const RedesFooter = styled.div`
 
 text-align: center;
  background-color: transparent;
  height: 20vh;
  color: #fff;

`;
const TextFooter = styled.div`
  border-top: 1px solid;
  color: #fff;
  padding: 10px;
  align-items: center;
  background-color: transparent;
`;