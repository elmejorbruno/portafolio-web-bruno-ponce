import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <ContainerImg>
      <CirculoFondo>   </CirculoFondo>
      <WrapperImagen>
        <img src={ImgbrunoPonce} alt="" />
      </WrapperImagen>
   
      </ContainerImg>
  )
}

export default HeroPic

const ContainerImg = styled.div`
  width: 70%;
  height: 20rem;
  /* background-color: rgba(0, 162, 255, 0.1); */
  backdrop-filter: blur(16px);
  border-radius: 100%;
  position: relative;
  overflow: hidden;

      @media screen and (max-width: 700px) {
      width: 40%;
      height: 10rem;
    }


`;
const CirculoFondo = styled.div`
  background: linear-gradient(
    to bottom ,
    ${({ theme }) => theme.colors.cyan},
    ${({ theme }) => theme.colors.black}
  );
position: absolute;
top: 4rem;
  border-radius: 100%;
  width: 100%;
  height: 50vh;
  
`;

const WrapperImagen = styled.div`
    position: absolute;
    top: -30px;
  width: 100%;
  height: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin:15rem 0 0 0;
    @media screen and (max-width: 700px) {
    width: 85%;
    
   }

  img{

    width: 100%;
    max-width: 500px;
     
      @media screen and (max-width: 700px) {
    width: 85%;
    
   }
  }
  
`;