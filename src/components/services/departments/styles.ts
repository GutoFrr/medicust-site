import styled from 'styled-components'

const Container = styled.div`
  width: 1172px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .department-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
    height: 293px;
    background: #ffffff;
    border: 2px solid #eff3f6;

    h4 {
      font: 700 28px 'Ubuntu', sans-serif;
      line-height: 55px;
      color: ${props => props.theme.maincolor.secundary};
      text-align: center;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eef6fc;
      border-radius: 50%;
      padding: 30px;
      color: ${props => props.theme.maincolor.primary};
      cursor: pointer;
      transition: all 0.2s;

      .department-icon {
        width: 46px;
        height: 46px;
      }

      :hover {
        color: #ffffff;
        background: ${props => props.theme.maincolor.primary};
      }
    }
  }

  .department-item.active {
    .icon-container {
      color: #ffffff;
      background: ${props => props.theme.maincolor.primary};
    }

    border: 2px solid ${props => props.theme.maincolor.primary};
  }
`

export default Container
