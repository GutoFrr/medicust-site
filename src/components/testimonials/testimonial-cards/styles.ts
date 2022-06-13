import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .testimonial-item {
    width: 373px;
    height: 368px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #6e789100;
    border: 2px solid #f7f7f7;
    box-shadow: 0px 0px 23px rgba(10, 46, 114, 0.0784314);
    padding: 0 43px;
    position: relative;
    transition: all 0.3s;

    :hover {
      box-shadow: 0px 0px 18px rgba(10, 46, 114, 0.2464314);
      border: 2px solid transparent;
    }
  }

  .elipses {
    width: 282px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: -8%;

    .gray {
      background: #6e7891;
      width: 63px;
      height: 63px;
      border-radius: 50%;
    }

    .primary {
      background: ${props => props.theme.maincolor.primary};
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .testimonial-title {
    margin-bottom: 30.5px;

    h5 {
      font: 700 20px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.secundary};
      margin-bottom: 7px;
    }

    h6 {
      font: 400 14px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.primary};
    }
  }

  .testimonial-text {
    h5 {
      font: 700 20px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.secundary};
      margin-bottom: 15.5px;
    }

    p {
      font: 400 16px 'Ubuntu', sans-serif;
      color: #454d5d;
    }
  }

  @media screen and (max-width: 1670px) {
    .testimonial-item:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 1150px) {
    .testimonial-item:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 960px) {
    .testimonial-item {
      width: 350px;
      height: 340px;
    }

    .elipses {
      .gray {
        width: 60px;
        height: 60px;
      }

      .primary {
        width: 37px;
        height: 37px;
      }
    }

    .testimonial-title {
      margin-bottom: 30.5px;

      h5 {
        font: 700 18px 'Ubuntu', sans-serif;
      }

      h6 {
        font: 400 14px 'Ubuntu', sans-serif;
      }
    }

    .testimonial-text {
      h5 {
        font: 700 18px 'Ubuntu', sans-serif;
        margin-bottom: 15px;
      }

      p {
        font: 400 16px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .testimonial-item {
      width: 330px;
      height: 320px;
    }

    .elipses {
      width: 240px;
      top: -7%;

      .gray {
        width: 45px;
        height: 45px;
      }

      .primary {
        width: 30px;
        height: 30px;
      }
    }

    .testimonial-title {
      margin-bottom: 25px;

      h5 {
        font: 700 17px 'Ubuntu', sans-serif;
      }

      h6 {
        font: 400 14px 'Ubuntu', sans-serif;
      }
    }

    .testimonial-text {
      h5 {
        font: 700 16px 'Ubuntu', sans-serif;
        margin-bottom: 15px;
      }

      p {
        font: 400 15px 'Ubuntu', sans-serif;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .testimonial-item {
      height: 50vh;
      max-height: 350px;
    }

    .elipses {
      width: 50vw;
      top: -7%;

      .gray {
        width: 45px;
        height: 45px;
      }

      .primary {
        width: 30px;
        height: 30px;
      }
    }
  }
`

export default Container
