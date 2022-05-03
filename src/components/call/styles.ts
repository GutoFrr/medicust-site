import styled from 'styled-components'
import bgScribbles from '../../assets/call-images/bg-scribbles.png'

const Container = styled.div`
  .call-container {
    height: 513px;
    background-color: ${props => props.theme.maincolor.primary};
    background-image: url(${bgScribbles});
    background-repeat: no-repeat;
    display: flex;
    column-gap: 50px;
    align-items: center;
    padding: 0 19.5%;
    margin-bottom: 119px;
  }

  .call-card {
    width: 472px;
    height: 393px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 67px 42px;
    border-radius: 15px;

    h3 {
      width: 382px;
      font: 700 45px 'Ubuntu', sans-serif;
      line-height: 56px;
      color: ${props => props.theme.maincolor.secundary};
      margin-bottom: 23.5px;
    }

    h5 {
      font: 700 30px 'Ubuntu', sans-serif;
      line-height: 56px;
      color: ${props => props.theme.maincolor.primary};
    }

    .phone-number {
      display: flex;
      align-items: center;

      .primary {
        background-color: ${props => props.theme.maincolor.primary};
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 17px;
      }
    }

    .email {
      display: flex;
      align-items: center;

      .orange {
        background-color: #ff9000;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: 17px;
      }
    }
  }

  .call-text {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h5 {
      font: 700 30px 'Ubuntu', sans-serif;
      line-height: 40px;
      margin-bottom: 14px;
    }

    p {
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 26px;
      margin-bottom: 50px;
    }

    .stats {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      h4 {
        font: 700 35px 'Ubuntu', sans-serif;
        line-height: 38px;
      }

      h6 {
        font: 400 17px 'Ubuntu', sans-serif;
        line-height: 38px;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .call-card {
      width: 450px;
      height: 385px;

      h3 {
        width: 350px;
        font: 700 36px 'Ubuntu', sans-serif;
        line-height: 52px;
        margin-bottom: 23.5px;
      }

      h5 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 52px;
      }
    }

    .call-text {
      h5 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 10px;
      }

      p {
        font: 400 16px 'Ubuntu', sans-serif;
        line-height: 26px;
        margin-bottom: 40px;
      }

      .stats {
        h4 {
          font: 700 32px 'Ubuntu', sans-serif;
          line-height: 38px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 38px;
        }
      }
    }
  }

  @media screen and (max-width: 1366px) {
    .call-card {
      width: 430px;
      height: 370px;

      h3 {
        font: 700 34px 'Ubuntu', sans-serif;
        line-height: 52px;
        margin-bottom: 20px;
      }

      h5 {
        font: 700 24px 'Ubuntu', sans-serif;
        line-height: 52px;
      }

      .phone-number {
        .primary {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 17px;
        }
      }

      .email {
        .orange {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-left: 17px;
        }
      }
    }

    .call-text {
      h5 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 10px;
      }

      p {
        font: 400 14px 'Ubuntu', sans-serif;
        line-height: 26px;
        margin-bottom: 40px;
      }

      .stats {
        h4 {
          font: 700 28px 'Ubuntu', sans-serif;
          line-height: 38px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 38px;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .call-card {
      h3 {
        font: 700 34px 'Ubuntu', sans-serif;
        line-height: 52px;
        margin-bottom: 20px;
      }

      h5 {
        font: 700 24px 'Ubuntu', sans-serif;
        line-height: 52px;
      }

      .phone-number {
        .primary {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 17px;
        }
      }

      .email {
        .orange {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-left: 17px;
        }
      }
    }

    .call-text {
      width: auto;
      h5 {
        width: 350px;
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 30px;
      }

      p {
        display: none;
      }

      .stats {
        h4 {
          font: 700 28px 'Ubuntu', sans-serif;
          line-height: 38px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 38px;
        }
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .call-container {
      column-gap: 2vw;
    }

    .call-card {
      width: 370px;
      height: 35vh;
      padding: 40px 42px;
      justify-content: space-around;

      h3 {
        font: 700 28px 'Ubuntu', sans-serif;
        line-height: 48px;
        margin-bottom: 20px;
        justify-self: center;
      }

      h5 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 48px;
      }

      .phone-number {
        .primary {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 1vw;
        }
      }

      .email {
        .orange {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-left: 1vw;
        }
      }
    }

    .call-text {
      width: auto;
      h5 {
        width: 350px;
        font: 700 20px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 20px;
      }

      .stats {
        h4 {
          font: 700 26px 'Ubuntu', sans-serif;
          line-height: 38px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 38px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .call-container {
      flex-direction: column;
      padding: 30px 0;
    }

    .call-card {
      width: 340px;
      padding: 40px 42px;
      justify-content: space-around;

      h3 {
        font: 700 24px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 16px;
        justify-self: center;
      }

      h5 {
        font: 700 20px 'Ubuntu', sans-serif;
        line-height: 40px;
      }

      .phone-number {
        .primary {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-right: 1vw;
        }
      }

      .email {
        .orange {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-left: 1vw;
        }
      }
    }

    .call-text {
      width: auto;
      text-align: center;

      h5 {
        width: 350px;
        font: 700 16px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 15px;
      }

      .stats {
        h4 {
          font: 700 24px 'Ubuntu', sans-serif;
          line-height: 30px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .call-container {
      justify-content: space-around;
    }

    .call-text {
      h5 {
        display: none;
      }

      .stats {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        h4 {
          font: 700 24px 'Ubuntu', sans-serif;
          line-height: 30px;
        }

        h6 {
          font: 400 16px 'Ubuntu', sans-serif;
          line-height: 30px;
        }
      }
    }
  }
`

export default Container
