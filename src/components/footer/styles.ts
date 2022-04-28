import styled from 'styled-components'
import backgroundScribbles from '../../assets/footer-images/background-scribbles.png'

const Container = styled.div`
  .footer {
    background-color: ${props => props.theme.maincolor.secundary};
    background-image: url(${backgroundScribbles});
    background-repeat: no-repeat;
    height: 577px;
    padding: 5.7% 19.5%;

    display: flex;
    justify-content: space-between;
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
`

export default Container
