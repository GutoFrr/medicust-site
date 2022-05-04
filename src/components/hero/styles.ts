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
      color: ${props => props.theme.maincolor.primary};
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
      transition: all 0.3s;
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

  @media screen and (max-width: 1150px) {
    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 150px;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 70vh;

    .hero-content {
      h4 {
        font: 700 18px 'Roboto', sans-serif;
      }

      h1 {
        font: 700 50px 'Ubuntu', sans-serif;
        line-height: 55px;
        width: auto;
      }

      p {
        display: none;
      }

      .hero-btn {
        width: 160px;
        height: 50px;
        font: 500 14px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .hero-content {
      h4 {
        font: 700 16px 'Roboto', sans-serif;
      }

      h1 {
        font: 700 40px 'Ubuntu', sans-serif;
        line-height: 48px;
        width: 400px;
      }

      .hero-btn {
        width: 140px;
        height: 40px;
        font: 500 12px 'Ubuntu', sans-serif;

        &:active {
          box-shadow: 0px 10px 50px 0.01px #04122c;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    height: 50vh;

    .hero-content {
      padding-top: 100px;

      h4 {
        font: 700 15px 'Roboto', sans-serif;
      }

      h1 {
        font: 700 36px 'Ubuntu', sans-serif;
        line-height: 44px;
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 470px) {
    height: 40vh;

    .hero-content {
      padding-top: 75px;

      h4 {
        font: 700 15px 'Roboto', sans-serif;
      }

      h1 {
        font: 700 30px 'Ubuntu', sans-serif;
        line-height: 40px;
        width: 370px;
      }
    }
  }
`

export default Container
