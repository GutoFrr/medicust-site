import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 28px;

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
      box-shadow: 0px 0px 18px rgba(10, 46, 114, 0.1784314);
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
`

export default Container
