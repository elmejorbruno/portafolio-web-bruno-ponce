import styled from "styled-components"
import ImgbrunoPonce from "../../../assets/img/bruno-ponces.png"

const HeroPic = () => {
  return (
    <Container>
      <WrapperImagen>
        <img src={ImgbrunoPonce} alt="" />
      </WrapperImagen>
      </Container>
  )
}

export default HeroPic

const Container = styled.div`
width: 100%;
    @media screen and (max-width: 700px) {
    width: 70%;
    
   }

`;
const WrapperImagen = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
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