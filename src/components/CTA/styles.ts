import styled from 'styled-components'

const Container = styled.div`
  .cta {
    height: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font: 700 45px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.secundary};
      line-height: 55px;
    }

    .cta-btn {
      width: 403px;
      height: 116px;
      background: #000;
      border: 2px solid #000;
      border-radius: 90px;
      color: #fff;
      font: 700 35px 'Ubuntu', sans-serif;
      line-height: 77px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: #fff;
        color: #000;
      }

      &:active {
        transition: all 0.1s;
        background: #000;
        color: #fff;
        box-shadow: 0 20px 50px -20px #333333;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .cta {
      h2 {
        font: 700 36px 'Ubuntu', sans-serif;
        line-height: 45px;
      }

      .cta-btn {
        width: 380px;
        height: 116px;
        font: 700 28px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    .cta {
      h2 {
        font: 700 32px 'Ubuntu', sans-serif;
        line-height: 40px;
      }

      .cta-btn {
        width: 370px;
        height: 116px;
        font: 700 28px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .cta {
      h2 {
        font: 700 34px 'Ubuntu', sans-serif;
        line-height: 45px;
      }

      .cta-btn {
        width: 340px;
        height: 100px;
        font: 700 26px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .cta {
      h2 {
        font: 700 28px 'Ubuntu', sans-serif;
        line-height: 36px;
      }

      .cta-btn {
        width: 280px;
        height: 80px;
        font: 700 28px 'Ubuntu', sans-serif;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .cta {
      h2 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 36px;
      }

      .cta-btn {
        width: 240px;
        height: 75px;
        font: 700 20px 'Ubuntu', sans-serif;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .cta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 30px;

      h2 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 30px;
        width: 50vw;
        text-align: center;
      }

      .cta-btn {
        width: 30vw;
        height: 70px;
        font: 700 20px 'Ubuntu', sans-serif;
      }
    }
  }
  @media screen and (max-width: 640px) {
    .cta {
      h2 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 30px;
        width: 50vw;
        text-align: center;
      }

      .cta-btn {
        width: 30vw;
        height: 60px;
        min-width: 160px;
        font: 700 18px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 470px) {
    .cta {
      h2 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 30px;
        width: 80vw;
      }

      .cta-btn {
        height: 55px;
        min-width: 160px;
        font: 700 18px 'Ubuntu', sans-serif;
      }
    }
  }
`

export default Container
