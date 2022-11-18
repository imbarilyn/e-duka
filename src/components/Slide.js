import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components'
import image1 from "../images/pexels-ron-lach-8396719.jpg"


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.6;
`;

const Wrapper = styled.div`
height: 100%;

`;

const Slid = styled.div`
display: flex;
align-items: center;
width: 100vw;
heigth: 100vh;

`;

const ImgContainer = styled.div`
flex: 1;
heigth: 100%
`;

const Image = styled.img`
height: 80%;

`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 10px;
`;
const Button = styled.button`
padding: 10px;
background-color: transparent;
font-size: 15px;
border-radius: 4px;`;


const Slide = () => {
  return (
    <Container>
        <Arrow direction = "left">
        <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slid>
                <ImgContainer>
                <Image src = {image1} />
                </ImgContainer>
                <InfoContainer>
                  <Title>KIKWETA SALE</Title>
                  <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% ON NEW ARRIVALS.</Desc>
                  <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slid>
        </Wrapper>
        <Arrow direction = "right">
        <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slide