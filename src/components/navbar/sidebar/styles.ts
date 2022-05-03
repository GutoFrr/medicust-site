import styled from 'styled-components'

const Container = styled.div`
  .menu-icon {
    color: #f9f9f9;
    font-size: 3vw;
    cursor: pointer;
  }

  .sidebar {
    width: 26vw;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background: #1f2122;
    transition: all 0.3s;
  }

  .sidebar.active {
    right: -26vw;
  }

  .sidebar-title {
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #f9f9f9;

    .close-icon {
      font-size: 2.7vw;
      border-radius: 15px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.maincolor.primary};
      }
    }

    h4 {
      font: 700 16px 'Ubuntu', sans-serif;
      cursor: pointer;
    }
  }

  .sidebar-items {
    margin-top: 10px;
    padding: 5px;
  }

  .sidebar-item {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    cursor: pointer;
    background: #323437;
    border-radius: 30px;
    margin-block: 7px;
    width: 120vw;
    transition: all 0.3s;

    .icon-container {
      background: ${props => props.theme.maincolor.primary};
      border-radius: 100px;
      padding: 10px;
      margin-right: 10px;
      transition: all 0.3s;

      .sidebar-icon {
        color: #fff;
        font-size: 2vw;
        vertical-align: sub;
        transition: all 0.3s;
      }
    }

    h5 {
      font: 600 14px 'Ubuntu', sans-serif;
      color: #fff;
    }

    &:hover {
      background: ${props => props.theme.maincolor.secundary};

      .icon-container {
        background: #292b2c;

        .sidebar-icon {
          color: ${props => props.theme.maincolor.primary};
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    .menu-icon {
      font-size: 3.5vw;
    }
  }

  @media screen and (max-width: 640px) {
    .menu-icon {
      font-size: 4vw;
    }

    .sidebar {
      left: 0;
    }

    .sidebar.active {
      left: -26vw;
    }
  }
`

export default Container
