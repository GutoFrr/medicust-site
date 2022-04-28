import styled from 'styled-components'
import backgroundScribbles from '../../assets/testimonials-images/background-scribbles.png'

const Container = styled.div`
  .blog-post {
    height: 583px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 117px;
  }

  .blog-banner {
    height: 183px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme.maincolor.secundary};
    background-image: url(${backgroundScribbles});
    padding: 0 62px;

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
`

export default Container
