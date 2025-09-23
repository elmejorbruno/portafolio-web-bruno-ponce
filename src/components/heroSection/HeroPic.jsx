import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <ContainerImg>
      <CirculoFondo>   
      <WrapperImagen >
        <img src={ImgbrunoPonce} alt="" />
      </WrapperImagen>
      </CirculoFondo>
      </ContainerImg>
  )
}

export default HeroPic

const ContainerImg = styled.div`
 flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
 width: 100%;
background-color: transparent;
      @media screen and (max-width: 700px) {
      width: 100%;
      height: 12rem;
     padding: 0;
    } 


`;
const CirculoFondo = styled.span`
  width: 80%;
  height: 60vh;
  padding: 10px;
  background-color: rgba(15, 180, 245, .3);
  border-radius: 9999px;
  overflow: hidden;

    @media screen and (max-width: 700px) {
      width: 35%;
      height: 25vh;
  
    } 
     @media screen and (max-width: 500px) {
      width: 55%;
      height: 25vh;
    } 
`;

const WrapperImagen = styled.div`
position: relative;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
background-color: transparent;

top: 1rem;
box-sizing: border-box;

img{
 
  width: 460px;
  height: auto;
  object-fit: cover;
 

  /* border: 5px solid #0e5c5c; */
  /* box-shadow:  0 0 25px rgba(108, 99, 255, .5); */
  transition: all .3s;
    
/* background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  ); */
    @media screen and (max-width: 700px) {
   
     height: 60vh;

  } 
   @media screen and (max-width: 400px) {
      height: 45vh;
  
    } 
}
  @media screen and (max-width: 700px) {
   top: 0rem;
  } 
`;