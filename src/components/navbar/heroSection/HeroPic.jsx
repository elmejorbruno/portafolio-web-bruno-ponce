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

`;
const WrapperImagen = styled.div`
  width: 100%;
  height: 90vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15rem 0 0 0;
  overflow: hidden;
  img{
    
    width: 100%;
    object-fit: cover;
      @media screen and (max-width: 700px) {
    width: 100%;
    
   }
  }
`;