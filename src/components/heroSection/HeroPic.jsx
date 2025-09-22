import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <ContainerImg>
      <CirculoFondo>   </CirculoFondo>
      <WrapperImagen >
        <img src={ImgbrunoPonce} alt="" />
      </WrapperImagen>
      
      </ContainerImg>
  )
}

export default HeroPic

const ContainerImg = styled.div`
 flex: 1;
  display: flex;
  justify-content: center;
  
 width: 100%;
background-color: transparent;
      @media screen and (max-width: 700px) {
      width: 100%;
      height: 12rem;
    } 


`;
const CirculoFondo = styled.span`

 width: 27%;
position: absolute;
top: 10rem;
 background-color: rgba(15, 180, 245, .3);
 border-radius: 9999px;
  height: 50vh;
    @media screen and (max-width: 700px) {
    width: 40%;
    height: 20vh;
    top: 24rem;
  } 
`;

const WrapperImagen = styled.div`
position: absolute;
height: 60%;



top: 6rem;
overflow: hidden;
img{
 
  width: 440px;
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
    width: 100%;
    height: 80vh;
   
  } 
}
  @media screen and (max-width: 700px) {
  background-color: transparent;
    height: 30vh;
    width: 60%;
    top: 0;
  border-radius: 9999px;
   position: relative;
  } 
`;