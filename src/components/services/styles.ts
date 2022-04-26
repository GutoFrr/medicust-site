import styled from 'styled-components'

const Container = styled.div`
  .services {
    height: 1137px;
    padding: 0 19.5vw;
    background: #f8f8f8;
  }

  .services-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 110px 0 78px 0;
    text-align: center;

    h3 {
      color: ${props => props.theme.maincolor.secundary};
      font: 700 42px 'Ubuntu', sans-serif;
      line-height: 55px;
      margin-bottom: 25.5px;
    }

    p {
      color: #454d5d;
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 30px;
      width: 608px;
    }
  }
`

export default Container
