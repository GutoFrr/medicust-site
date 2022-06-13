import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .services {
    padding: 0 19.3vw;
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

  .arrow {
    display: none;
    position: absolute;
    top: 37.2%;
    font-size: 25px;
    color: ${props => props.theme.maincolor.primary};
    width: 100px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    z-index: 2;
  }

  @media screen and (max-width: 1259px) {
    .department {
      width: 588px;
      overflow: hidden;
    }

    .services {
      padding: 0 335px;
    }

    .arrow {
      display: block;

      :active {
        transition: all 0.1s;
        color: #62b6ff;
      }
    }

    .left-arrow {
      left: 8vw;

      :hover {
        left: 6vw;
      }
    }

    .right-arrow {
      right: 8vw;

      :hover {
        right: 6vw;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .services-title {
      h3 {
        font: 700 36px 'Ubuntu', sans-serif;
        line-height: 36px;
      }

      p {
        line-height: 30px;
        width: 500px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .services-title {
      h3 {
        font: 700 34px 'Ubuntu', sans-serif;
        line-height: 34px;
      }

      p {
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 28px;
        width: 500px;
      }
    }

    .arrow {
      top: 32.3%;
    }

    .left-arrow {
      left: 6vw;

      :hover {
        left: 5vw;
      }
    }

    .right-arrow {
      right: 6vw;

      :hover {
        right: 5vw;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .services-title {
      h3 {
        font: 700 30px 'Ubuntu', sans-serif;
        line-height: 34px;
      }

      p {
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 28px;
        width: auto;
      }
    }

    .left-arrow {
      left: 5vw;

      :hover {
        left: 4vw;
      }
    }

    .right-arrow {
      right: 5vw;

      :hover {
        right: 4vw;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .department {
      width: 294px;
    }

    .arrow {
      top: 32%;
    }
  }

  @media screen and (max-width: 640px) {
    .department {
      width: 260px;
    }

    .services-title {
      padding-bottom: 50px;

      h3 {
        font: 700 28px 'Ubuntu', sans-serif;
        line-height: 34px;
      }

      p {
        font: 400 14px 'Ubuntu', sans-serif;
        line-height: 28px;
        width: auto;
      }
    }

    .arrow {
      top: 33.5%;
    }
  }
`

export default Container
