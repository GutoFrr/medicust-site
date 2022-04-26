import styled from 'styled-components'

const Container = styled.div`
  .cta {
    height: 372px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font: 700 45px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.secundary};
      line-height: 55px;
    }

    .cta-btn {
      width: 403px;
      height: 116px;
      background: #000;
      border: 2px solid #000;
      border-radius: 90px;
      color: #fff;
      font: 700 35px 'Ubuntu', sans-serif;
      line-height: 77px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: #fff;
        color: #000;
      }

      &:active {
        transition: all 0.2s;
        background: #000;
        color: #fff;
        box-shadow: 0 5px 50px 0.2px #333333;
      }
    }
  }
`

export default Container
