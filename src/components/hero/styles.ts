import styled from 'styled-components'
import background from '../../assets/hero-images/background.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 254px;

    h4 {
      font: 700 22px 'Roboto', sans-serif;
      color: ${props => props.theme.maincolor.primary};
      line-height: 28px;
      margin-bottom: 18.5px;
    }

    h1 {
      font: bold 70px 'Ubuntu', sans-serif;
      line-height: 77px;
      color: #f9f9f9;
      margin-bottom: 26.5px;
      width: 588px;
    }

    p {
      font: 400 20px 'Roboto', sans-serif;
      line-height: 28px;
      color: #454d5d;
      margin-bottom: 29px;
    }

    .hero-btn {
      width: 197px;
      height: 58px;
      background: ${props => props.theme.maincolor.primary};
      border: 2px solid ${props => props.theme.maincolor.primary};
      border-radius: 70px;
      font: 500 16px 'Ubuntu', sans-serif;
      line-height: 18px;
      color: #fff;
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.maincolor.secundary};
      }

      &:active {
        transition: all 0.1s;
        background: ${props => props.theme.maincolor.primary};
        box-shadow: 0px 10px 50px 0.2px #04122c;
      }
    }
  }
`

export default Container
