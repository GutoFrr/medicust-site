import styled from 'styled-components'

const Container = styled.div`
  .team-members {
    height: 903px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .members-title {
    text-align: center;

    h3 {
      font: 700 42px 'Ubuntu', sans-serif;
      line-height: 55px;
      color: ${props => props.theme.maincolor.secundary};
      margin-bottom: 25.5px;
    }

    p {
      width: 608px;
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 30px;
      color: #454d5d;
    }
  }
`

export default Container