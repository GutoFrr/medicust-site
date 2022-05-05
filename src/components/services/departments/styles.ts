import styled from 'styled-components'

const Container = styled.div`
  .department-container {
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 223px;
    position: relative;
  }

  .department-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 294px;
    height: 294px;
    background: #ffffff;
    border: 2px solid #eff3f6;
    transition: all 0.3s;

    h4 {
      font: 700 28px 'Ubuntu', sans-serif;
      line-height: 55px;
      color: ${props => props.theme.maincolor.secundary};
      text-align: center;
      cursor: default;
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

    :hover {
      border: 2px solid ${props => props.theme.maincolor.primary};
    }
  }

  .department-item.active {
    .icon-container {
      color: #ffffff;
      background: ${props => props.theme.maincolor.primary};
    }

    border: 2px solid ${props => props.theme.maincolor.primary};
  }

  .arrow {
    display: none;
  }

  @media screen and (max-width: 1681px) {
    .department-item:nth-child(8),
    .department-item:nth-child(9) {
      display: none;
    }
  }

  @media screen and (max-width: 1259px) {
    .department-container.active {
      transition: all 0.4s ease;
      .department-item:nth-child(6),
      .department-item:nth-child(7),
      .department-item:nth-child(8),
      .department-item:nth-child(9) {
        display: flex;
        opacity: 1;
      }

      .department-item:nth-child(2),
      .department-item:nth-child(3),
      .department-item:nth-child(4),
      .department-item:nth-child(5) {
        display: none;
        opacity: 0;
      }
    }

    .department-container.inactive {
      .department-item:nth-child(6),
      .department-item:nth-child(7),
      .department-item:nth-child(8),
      .department-item:nth-child(9) {
        display: none;
        opacity: 0inherit;
      }

      .department-item:nth-child(2),
      .department-item:nth-child(3),
      .department-item:nth-child(4),
      .department-item:nth-child(5) {
        display: flex;
        opacity: 1;
      }
    }

    .department-item:nth-child(6),
    .department-item:nth-child(7) {
      display: none;
    }

    .arrow {
      display: block;
      position: absolute;
      font-size: 25px;
      color: ${props => props.theme.maincolor.primary};
      width: 100px;
      transition: all 0.3s ease-in;
      cursor: pointer;

      :active {
        transition: all 0.1s;
        color: #62b6ff;
      }
    }

    .left-arrow {
      right: 67vw;

      :hover {
        right: 69vw;
      }
    }

    .right-arrow {
      left: 67vw;

      :hover {
        left: 69vw;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .department-item {
      width: 280px;
      height: 280px;

      h4 {
        font: 700 26px 'Ubuntu', sans-serif;
        line-height: 55px;
      }

      .icon-container {
        padding: 28px;

        .department-icon {
          width: 44px;
          height: 44px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .department-item {
      display: none;
    }

    .department-item:nth-child(2) {
      display: flex;
    }
  }

  @media screen and (max-width: 640px) {
    .department-item {
      width: 260px;
      height: 260px;

      h4 {
        font: 700 24px 'Ubuntu', sans-serif;
        line-height: 50px;
      }

      .icon-container {
        padding: 24px;

        .department-icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`

export default Container
