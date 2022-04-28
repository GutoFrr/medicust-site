import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 26px;

  .post-card-item {
    width: 573px;
    background: #eff3f6;
    border: 3px solid #eff3f6;
    border-radius: 12px;
    transition: all 0.3s;

    :hover {
      border: 3px solid ${props => props.theme.maincolor.primary};
    }
  }

  .post-card-text {
    width: 273px;
    height: 333px;
    padding: 46px 34px;
    float: right;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;

    .date {
      font: 500 16px 'Ubuntu', sans-serif;
      line-height: 25px;
      color: #5e6f8e;
      margin-bottom: 25px;
    }

    .title {
      font: 700 21px 'Ubuntu', sans-serif;
      line-height: 30px;
      color: ${props => props.theme.maincolor.secundary};
      margin-bottom: 26.5px;
    }

    .link {
      font: 500 16px 'Ubuntu', sans-serif;
      line-height: 25px;
      color: ${props => props.theme.maincolor.primary};
      margin-bottom: 6.5px;
      cursor: pointer;
    }

    .release {
      font: 500 15px 'Ubuntu', sans-serif;
      line-height: 25px;
      color: #5e6f8e;
    }
  }
`

export default Container
