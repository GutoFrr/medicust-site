import styled from 'styled-components'

const Container = styled.div`
  .advertising {
    display: flex;
    align-items: center;
    margin-top: -119px;
    background: ${props => props.theme.maincolor.secundary};
    margin-bottom: 119px;
    column-gap: 52px;
  }

  .advertising-text {
    display: flex;
    flex-direction: column;
    padding: 88px 0 88px 54px;

    h6 {
      font: 500 18px 'Ubuntu', sans-serif;
      line-height: 55px;
      color: #00ffc0;
      margin-bottom: 9px;
    }

    h2 {
      font: 700 45px 'Ubuntu', sans-serif;
      line-height: 56px;
      color: #fff;
      margin-bottom: 35.5px;
      width: 459px;
    }

    .advertising-btn {
      width: 198px;
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 500 16px 'Ubuntu', sans-serif;
      line-height: 18px;
      color: #fff;
      background: ${props => props.theme.maincolor.primary};
      border: 2px solid ${props => props.theme.maincolor.primary};
      border-radius: 50px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.maincolor.secundary};
      }

      &:active {
        transition: all 0.2s;
        background: ${props => props.theme.maincolor.primary};
        box-shadow: 0px 10px 50px 0.2px #04122c;
      }
    }
  }

  .video {
    width: 552px;
    height: 468px;
    padding: 20px 20px 20px 0;
  }

  @media screen and (max-width: 1366px) {
    .advertising-text {
      h6 {
        font: 500 16px 'Ubuntu', sans-serif;
        line-height: 55px;
        color: #00ffc0;
        margin-bottom: 9px;
      }

      h2 {
        font: 700 40px 'Ubuntu', sans-serif;
        line-height: 56px;
        color: #fff;
        margin-bottom: 35.5px;
      }

      .advertising-btn {
        width: 190px;
        height: 58px;
        font: 500 16px 'Ubuntu', sans-serif;
        line-height: 18px;
      }
    }

    .video {
      width: 530px;
      height: 440px;
      padding-block: 10px;
    }
  }
  @media screen and (max-width: 1280px) {
    .advertising {
      column-gap: 1vw;
    }

    .video {
      width: 500px;
      height: 410px;
      padding: 0 20px 0 0;
    }
  }
  @media screen and (max-width: 1150px) {
    .advertising-text {
      h2 {
        font: 700 32px 'Ubuntu', sans-serif;
        line-height: 50px;
        color: #fff;
        margin-bottom: 35.5px;
      }

      .advertising-btn {
        width: 170px;
        height: 50px;
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 18px;
      }
    }

    .video {
      width: 460px;
      height: 340px;
      padding-block: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    .advertising {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      width: 100vw;
    }

    .advertising-text {
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0;
      margin-bottom: 20px;
    }

    .video {
      padding: 0;
    }
  }

  @media screen and (max-width: 640px) {
    .advertising-text {
      h2 {
        font: 700 28px 'Ubuntu', sans-serif;
        line-height: 45px;
        color: #fff;
        margin: 0;
      }

      .advertising-btn {
        width: 170px;
        height: 50px;
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 18px;
        margin-top: 20px;
      }
    }

    .video {
      width: 440px;
      height: 310px;
    }
  }

  @media screen and (max-width: 470px) {
    .advertising-text {
      h2 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 45px;
        width: 90vw;
      }

      .advertising-btn {
        width: 170px;
        height: 50px;
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 18px;
        margin-top: 20px;
      }
    }

    .video {
      width: 90vw;
      height: 310px;
    }
  }
`

export default Container
