import styled from 'styled-components'

const Container = styled.div`
  .menu-icon {
    color: #f9f9f9;
    font-size: 25px;
    cursor: pointer;
  }

  .sidebar {
    width: 30vw;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background: #1f2122;
    transition: all 0.3s;
  }

  .sidebar.active {
    right: -30vw;
  }

  .sidebar-title {
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #f9f9f9;

    .close-icon {
      font-size: 30px;
      border-radius: 15px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.maincolor.primary};
      }
    }

    h4 {
      font: 700 18px 'Ubuntu', sans-serif;
      cursor: default;
    }
  }

  .sidebar-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    margin-block: 6px;
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
        font-size: 22px;
        vertical-align: sub;
        transition: all 0.3s;
      }
    }

    h5 {
      font: 600 16px 'Ubuntu', sans-serif;
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

  @media screen and (max-width: 640px) {
    .sidebar {
      width: 40vw;
      left: 0;
    }

    .sidebar.active {
      left: -40vw;
    }

    .sidebar-title {
      h4 {
        font: 700 18px 'Ubuntu', sans-serif;
      }

      .close-icon {
        font-size: 25px;
      }
    }

    .sidebar-items {
      align-items: flex-end;

      .sidebar-item {
        padding-left: 83vw;

        .icon-container {
          padding: 10px;

          .sidebar-icon {
            font-size: 22px;
          }
        }

        h5 {
          font: 600 16px 'Ubuntu', sans-serif;
        }
      }
    }
  }

  @media screen and (max-width: 470px) {
    .sidebar-title {
      h4 {
        font: 700 17px 'Ubuntu', sans-serif;
      }

      .close-icon {
        font-size: 23px;
      }
    }

    .sidebar-items {
      align-items: flex-end;

      .sidebar-item {
        padding-left: 83vw;

        .icon-container {
          padding: 8px;

          .sidebar-icon {
            font-size: 20px;
          }
        }

        h5 {
          font: 600 15px 'Ubuntu', sans-serif;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .sidebar {
      width: 45vw;
      left: 0;
    }

    .sidebar.active {
      left: -45vw;
    }

    .sidebar-title {
      h4 {
        font: 700 16px 'Ubuntu', sans-serif;
      }

      .close-icon {
        font-size: 22px;
      }
    }

    .sidebar-items {
      align-items: flex-end;

      .sidebar-item {
        padding-left: 80vw;

        .icon-container {
          padding: 7px;

          .sidebar-icon {
            font-size: 18px;
          }
        }

        h5 {
          font: 600 14px 'Ubuntu', sans-serif;
        }
      }
    }
  }
`

export default Container
