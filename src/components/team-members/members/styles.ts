import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 117px;
  gap: 14px;

  .member-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 331px;
    background: #fff;
    border: 3px solid #eff3f6;
    border-radius: 12px;
    transition: all 0.3s;

    :hover {
      border: 3px solid ${props => props.theme.maincolor.primary};
    }
  }

  .member-image {
    background: #e5e5e5;
    border-radius: 9px;
    width: 272px;
    height: 233px;
    align-self: center;
  }

  .member-description {
    align-self: center;
    text-align: center;
    background: #fff;

    h3 {
      font: 700 25px 'Ubuntu', sans-serif;
      line-height: 55px;
      color: ${props => props.theme.maincolor.secundary};
    }

    h6 {
      font: 700 15px 'Ubuntu', sans-serif;
      color: ${props => props.theme.maincolor.primary};
    }
  }

  .join-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 277px;
    height: 331px;
    background: ${props => props.theme.maincolor.primary};
    border-radius: 12px;
    padding: 72px 40px 58px 40px;
    text-align: center;

    h4 {
      font: 700 24px 'Ubuntu', sans-serif;
      line-height: 40px;
      color: #fff;
      margin-bottom: 12px;
    }

    p {
      font: 400 16px 'Ubuntu', sans-serif;
      line-height: 26px;
      color: #fff;
      margin-bottom: 16px;
    }

    .orange-elipse {
      width: 58px;
      height: 58px;
      background: #ff9000;
      border-radius: 50%;
    }
  }
`

export default Container
