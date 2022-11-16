import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Announcement = () => {
  return (
    <Container>Exciting deals from Dubai and China. Free shipping on $50 purchases</Container>
  )
}

export default Announcement