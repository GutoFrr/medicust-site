import styled from 'styled-components'
import backgroundScribbles from '../../assets/testimonials-images/background-scribbles.png'

const Container = styled.div`
  .blog-post {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 117px;
  }

  .blog-banner {
    width: 1172px;
    height: 183px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme.maincolor.secundary};
    background-image: url(${backgroundScribbles});
    background-repeat: no-repeat;

    h2 {
      width: 360px;
      align-self: center;
      font: 700 45px 'Ubuntu', sans-serif;
      line-height: 56px;
      color: #fff;
    }

    p {
      width: 426px;
      align-self: center;
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 25px;
      color: #fff;
    }

    .elipses {
      display: flex;
      align-self: center;
      column-gap: 17px;

      .primary {
        background-color: ${props => props.theme.maincolor.primary};
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .orange {
        background-color: #ff9000;
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .blog-banner {
      width: 1100px;

      h2 {
        width: 30vw;
        font: 700 40px 'Ubuntu', sans-serif;
        line-height: 56px;
      }

      p {
        width: 30vw;
        font: 400 16px 'Ubuntu', sans-serif;
        line-height: 25px;
      }

      .elipses {
        width: 12vw;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .blog-banner {
      width: 1000px;

      h2 {
        width: 27vw;
        font: 700 34px 'Ubuntu', sans-serif;
        line-height: 50px;
      }

      p {
        width: 30vw;
        font: 400 16px 'Ubuntu', sans-serif;
        line-height: 25px;
      }

      .elipses {
        width: 12vw;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .blog-banner {
      width: 100vw;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-size: cover;
      text-align: center;
      padding: 24px 0;

      h2 {
        width: 30vw;
        font: 700 32px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 20px;
      }

      p {
        width: 40vw;
        font: 400 16px 'Ubuntu', sans-serif;
        line-height: 25px;
      }

      .elipses {
        display: none;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .blog-banner {
      h2 {
        width: 40vw;
        font: 700 30px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 20px;
      }

      p {
        width: 50vw;
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 24px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .blog-banner {
      h2 {
        width: 50vw;
        font: 700 28px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 20px;
      }

      p {
        width: 60vw;
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 24px;
      }
    }
  }

  @media screen and (max-width: 470px) {
    .blog-banner {
      h2 {
        width: 60vw;
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 40px;
        margin-bottom: 20px;
      }

      p {
        width: 80vw;
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 24px;
      }
    }
  }
`

export default Container
