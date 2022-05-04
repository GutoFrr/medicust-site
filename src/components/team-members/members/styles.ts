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
    justify-content: space-around;
    align-items: center;
    width: 277px;
    height: 331px;
    background: ${props => props.theme.maincolor.primary};
    border-radius: 12px;
    padding-block: 72px 58px;
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
      width: 250px;
    }

    .orange-elipse {
      width: 58px;
      height: 58px;
      background: #ff9000;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1440px) {
    .member-item:nth-child(4),
    .member-item:nth-child(5),
    .member-item:nth-child(6),
    .member-item:nth-child(7),
    .member-item:nth-child(8) {
      display: none;
    }
  }

  @media screen and (max-width: 1150px) {
    .member-item {
      height: 320px;
    }

    .member-image {
      width: 260px;
      height: 230px;
    }

    .member-description {
      h3 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 55px;
      }

      h6 {
        font: 700 14px 'Ubuntu', sans-serif;
      }
    }

    .join-card {
      width: 260px;
      height: 320px;
      padding-block: 66px 52px;
      text-align: center;

      h4 {
        font: 700 24px 'Ubuntu', sans-serif;
        line-height: 40px;
      }

      p {
        font: 400 16px 'Ubuntu', sans-serif;
        line-height: 26px;
      }

      .orange-elipse {
        width: 56px;
        height: 56px;
      }
    }
  }

  @media screen and (max-width: 923px) {
    .member-item {
      display: none;
    }

    .member-item:nth-child(1) {
      display: flex;
    }

    .member-image {
      width: 240px;
      height: 230px;
    }

    .join-card {
      width: 240px;
      height: 320px;
      padding-block: 66px 52px;
      text-align: center;

      h4 {
        font: 700 22px 'Ubuntu', sans-serif;
        line-height: 30px;
      }

      p {
        font: 400 14px 'Ubuntu', sans-serif;
        line-height: 26px;
        width: 220px;
      }

      .orange-elipse {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .member-item {
      height: 310px;
    }

    .member-image {
      width: 230px;
      height: 210px;
    }

    .member-description {
      h3 {
        font: 700 20px 'Ubuntu', sans-serif;
        line-height: 55px;
      }

      h6 {
        font: 700 13px 'Ubuntu', sans-serif;
      }
    }

    .join-card {
      width: 230px;
      height: 310px;
      padding-block: 66px 52px;
      text-align: center;

      h4 {
        font: 700 20px 'Ubuntu', sans-serif;
        line-height: 30px;
      }

      p {
        font: 400 14px 'Ubuntu', sans-serif;
        line-height: 26px;
        width: 220px;
      }

      .orange-elipse {
        width: 50px;
        height: 50px;
      }
    }
  }
`

export default Container
