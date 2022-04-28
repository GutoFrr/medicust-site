import styled from 'styled-components'

const Container = styled.div`
  .testimonials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 118px;
  }

  .testimonials-title {
    color: ${props => props.theme.maincolor.secundary};
    text-align: center;
    margin-bottom: 90px;

    h3 {
      font: 700 42px 'Ubuntu', sans-serif;
      line-height: 55px;
      margin-bottom: 25.5px;
    }

    p {
      width: 608px;
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 30px;
      color: #454d5d;
    }
  }
`

export default Container
