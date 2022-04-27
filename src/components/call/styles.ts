import styled from 'styled-components'
import bgScribbles from '../../assets/call-images/bg-scribbles.png'

const Container = styled.div`
  .call-container {
    height: 513px;
    background-color: ${props => props.theme.maincolor.primary};
    background-image: url(${bgScribbles});
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
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
    padding: 67px 50px;
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

      img {
        margin-right: 17px;
      }
    }

    .email {
      display: flex;
      align-items: center;

      img {
        margin-left: 17px;
      }
    }
  }

  .call-text {
    width: 589px;
    height: 322px;
    display: flex;
    flex-direction: column;
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
`

export default Container
