import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 26px;

  .post-card-item {
    width: 573px;
    background: #eff3f6;
    border: 3px solid #eff3f6;
    border-radius: 12px;
    margin-top: 67px;
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
    justify-content: space-between;

    .date {
      font: 500 16px 'Ubuntu', sans-serif;
      line-height: 25px;
      color: #5e6f8e;
    }

    .title {
      font: 700 21px 'Ubuntu', sans-serif;
      line-height: 30px;
      color: ${props => props.theme.maincolor.secundary};
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

  @media screen and (max-width: 1280px) {
    .post-card-item {
      width: 42.4vw;
    }
  }

  @media screen and (max-width: 1150px) {
    .post-card-text {
      width: 23.8vw;
      padding: 46px 34px;

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
  }

  @media screen and (max-width: 1024px) {
    .post-card-text {
      width: 20vw;
      padding: 36px 30px;

      .date {
        font: 600 14px 'Ubuntu', sans-serif;
        line-height: 25px;
        color: #5e6f8e;
        margin-bottom: 12px;
      }

      .title {
        font: 700 18px 'Ubuntu', sans-serif;
        line-height: 30px;
        color: ${props => props.theme.maincolor.secundary};
        margin-bottom: 15px;
      }

      .link {
        font: 600 14px 'Ubuntu', sans-serif;
        line-height: 20px;
        color: ${props => props.theme.maincolor.primary};
        margin-bottom: 6px;
        cursor: pointer;
      }

      .release {
        font: 600 13px 'Ubuntu', sans-serif;
        line-height: 20px;
        color: #5e6f8e;
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 26px;

    .post-card-item {
      width: 80vw;
      max-width: 573px;
    }

    .post-card-text {
      width: 40vw;
      max-width: 273px;
      height: 333px;
      padding: 46px 34px;

      .date {
        font: 500 15px 'Ubuntu', sans-serif;
        line-height: 25px;
        color: #5e6f8e;
      }

      .title {
        font: 700 20px 'Ubuntu', sans-serif;
        line-height: 30px;
        color: ${props => props.theme.maincolor.secundary};
      }

      .link {
        font: 500 15px 'Ubuntu', sans-serif;
        line-height: 25px;
        color: ${props => props.theme.maincolor.primary};
        margin-bottom: 6.5px;
        cursor: pointer;
      }

      .release {
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 25px;
        color: #5e6f8e;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .post-card-item {
      width: 80vw;
      max-width: 573px;
    }

    .post-card-text {
      width: 48vw;
      max-width: 273px;
      padding: 24px 34px;
      justify-content: space-around;

      .date {
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 24px;
        color: #5e6f8e;
      }

      .title {
        font: 700 18px 'Ubuntu', sans-serif;
        line-height: 26px;
        color: ${props => props.theme.maincolor.secundary};
      }

      .link {
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 24px;
        color: ${props => props.theme.maincolor.primary};
        margin-bottom: 6.5px;
        cursor: pointer;
      }

      .release {
        font: 500 14px 'Ubuntu', sans-serif;
        line-height: 24px;
        color: #5e6f8e;
      }
    }
  }
`

export default Container
