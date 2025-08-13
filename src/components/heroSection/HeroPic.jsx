import styled from "styled-components"
import ImgbrunoPonce from "../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <ContainerImg>
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
/* background-color: rgba(0, 162, 255, 0.3); */
 background-color: rgba(5, 106, 94, 0.7);
  backdrop-filter: blur(16px);
border-radius: 100%;
position: relative;
overflow:hidden;
    @media screen and (max-width: 700px) {
    width: 70%;
    
   }

`;
const WrapperImagen = styled.div`
position: absolute;
  width: 100%;
  height: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin:15rem 0 0 0;
 

  img{
    
    width: 100%;
    max-width: 400px;
     display: block;
    object-fit: cover;
      @media screen and (max-width: 700px) {
    width: 85%;
    
   }
  }
  
`;