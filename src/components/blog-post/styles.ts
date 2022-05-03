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
    align-items: flex-start;
    background-color: ${props => props.theme.maincolor.secundary};
    background-image: url(${backgroundScribbles});
    margin-bottom: 67px;

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
        font: 700 36px 'Ubuntu', sans-serif;
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
`

export default Container
