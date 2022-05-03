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

  @media screen and (max-width: 1150px) {
    .testimonials-title {
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
    .testimonials-title {
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
  }

  @media screen and (max-width: 960px) {
    .testimonials-title {
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
  }

  @media screen and (max-width: 640px) {
    .testimonials-title {
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
  }
`

export default Container
