import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces-img-pequena.png"

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
  flex: 1;
  display: flex;
  justify-content: center;
  
 width: 100%;
   /* height: 20rem;
  background-color: transparent;
  backdrop-filter: blur(16px);

  position: relative; */
  

      @media screen and (max-width: 700px) {
      width: 100%;
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

img{
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #0e5c5c;
  box-shadow:  0 0 25px rgba(108, 99, 255, .5);
  transition: all .3s;
    
background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.grey},
    ${({ theme }) => theme.colors.black}
  );
    @media screen and (max-width: 700px) {
    width: 200px;
    height: 200px;
   
  } 
}
/* position: relative;

  width: 100%;
  height: 20rem;

background: linear-gradient(
  to bottom,
  rgba(113, 63, 160, 0.1) 0%,   
  ${({ theme }) => theme.colors.cyan} 25%, 
  ${({ theme }) => theme.colors.black} 100% 
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
  } */
`;