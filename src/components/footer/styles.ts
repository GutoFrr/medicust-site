import styled from 'styled-components'
import backgroundScribbles from '../../assets/footer-images/background-scribbles.png'

const Container = styled.div`
  .footer {
    background-color: ${props => props.theme.maincolor.secundary};
    background-image: url(${backgroundScribbles});
    background-repeat: no-repeat;
    background-position: 4.6vw 0;
    height: 577px;
    display: flex;
    flex-direction: column;
  }

  .footer-content {
    width: 100vw;
    padding: 112px 0;
    column-gap: 5.8vw;
    display: flex;
    justify-content: center;
    color: #fff;

    h4 {
      font: 700 26px 'Ubuntu', sans-serif;
      margin-bottom: 24.5px;
    }

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 20px;
      cursor: pointer;
      font: 400 16px 'Ubuntu', sans-serif;
    }
  }

  .medicust-column {
    height: 243px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 25px;
      width: 303px;
    }

    .logo {
      width: 231px;
      height: 54px;
    }

    .elipses {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      column-gap: 12px;
    }

    .secundary-elipse {
      width: 45px;
      height: 45px;
      background: #163c86;
      border: 1px solid #4a6aa7;
      border-radius: 50%;
      cursor: pointer;
    }

    .primary-elipse {
      width: 45px;
      height: 45px;
      background: ${props => props.theme.maincolor.primary};
      border: 1px solid ${props => props.theme.maincolor.primary};
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .blog-post-column {
    width: 201px;
    height: 292px;
  }

  .blog-post-1 {
    margin-bottom: 19px;
  }

  .blog-post {
    cursor: pointer;

    h6 {
      font: 400 16px 24px 'Ubuntu', sans-serif;
      line-height: 24px;
      color: #ff9000;
    }

    p {
      font: 400 16px 24px 'Ubuntu', sans-serif;
      line-height: 24px;
      color: #fff;
      width: 179px;
    }
  }

  hr {
    border: 1px solid #173e87;
  }

  .copyright {
    width: 100vw;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 40px;
      color: #fff;
    }
  }

  @media screen and (max-width: 1150px) {
    .footer-content {
      padding: 134px 0;
    }

    .blog-post-column {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .footer-content {
      padding: 137px 0;

      h4 {
        font: 700 24px 'Ubuntu', sans-serif;
        margin-bottom: 24px;
      }

      ul {
        list-style: none;
      }

      li {
        margin-bottom: 20px;
        cursor: pointer;
        font: 400 15px 'Ubuntu', sans-serif;
      }
    }

    .medicust-column {
      p {
        font: 400 15px 'Ubuntu', sans-serif;
        line-height: 25px;
        width: 270px;
      }

      .logo {
        width: 210px;
        height: auto;
      }

      .secundary-elipse {
        width: 42px;
        height: 42px;
      }

      .primary-elipse {
        width: 42px;
        height: 42px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .departments {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    .footer {
      height: 400px;
      background-position: 2vw;
    }

    .footer-content {
      padding: 50px 0;

      .medicust-column {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
      }
    }

    .quick-links {
      display: none;
    }
  }
`

export default Container
