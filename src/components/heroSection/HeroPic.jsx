import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <ContainerImg>
      <WrapperImagen >
        <img src={ImgbrunoPonce} alt="" />
      </WrapperImagen>
      {/* <CirculoFondo>   </CirculoFondo> */}
   
      </ContainerImg>
  )
}

export default HeroPic

const ContainerImg = styled.div`
  width: 100%;
  height: 20rem;
  background-color: transparent;
  backdrop-filter: blur(16px);

  position: relative;
  

      @media screen and (max-width: 700px) {
      width: 40%;
      height: 10rem;
     
    }


`;
// const CirculoFondo = styled.div`

 
// position: absolute;
// top: 5rem;
//  background-color: #00ffff;
//   width: 100%;
//   height: 50vh;
  
// `;

const WrapperImagen = styled.div`
position: relative;

  width: 100%;
  height: 20rem;

background: linear-gradient(
  to bottom,
  rgba(113, 63, 160, 0.1) 0%,   /* cyan muy transparente en la parte de arriba */
  ${({ theme }) => theme.colors.cyan} 25%, /* cyan sólido más abajo */
  ${({ theme }) => theme.colors.black} 100% /* termina en negro */
);

 
 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90%;
  
  
  max-width: 480px;

  overflow: hidden;
  @media screen and (max-width: 700px) {
    width: 85%;
    border-radius: 300px;
    height: 10rem;
  }

  img {
    position: absolute;
    top: -1rem;
    width: 100%;
    max-width: 600px;

    @media screen and (max-width: 700px) {
      width: 100%;
        top: 1rem;
    }
  }
`;