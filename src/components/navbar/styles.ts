import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.maincolor.primary};
  padding: 0 19.5vw;

  .navbar {
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 10.46vw;
    cursor: pointer;
  }

  .nav-menu {
    width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    color: #f9f9f9;
    font: 500 17px 'Ubuntu', sans-serif;
    line-height: 20px;
  }

  .menu-item {
    cursor: pointer;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 6vh;
    background: ${props => props.theme.maincolor.secundary};
    border: 2px solid ${props => props.theme.maincolor.secundary};
    border-radius: 70px;
    color: #f9f9f9;
    font: 500 16px 'Ubuntu', sans-serif;
    cursor: pointer;
    line-height: 18px;
    text-align: center;
    transition: all 0.2s;

    :hover {
      background: ${props => props.theme.maincolor.primary};
    }

    :active {
      transition: all 0.2s;
      background: ${props => props.theme.maincolor.secundary};
      box-shadow: 0px 10px 50px 0.2px #04122c;
    }
  }

  .nav-menu-icon {
    display: none;
  }

  .white-space {
    display: none;
  }

  .heart-logo {
    display: none;
  }

  @media screen and (max-width: 1440px) {
    .nav-menu {
      font: 500 15px 'Ubuntu', sans-serif;
    }

    .nav-btn {
      font: 500 15px 'Ubuntu', sans-serif;
    }
  }

  @media screen and (max-width: 1366px) {
    .logo {
      width: 11vw;
    }

    .nav-menu {
      font: 500 15px 'Ubuntu', sans-serif;
    }

    .nav-btn {
      height: 5vh;
      font: 500 14px 'Ubuntu', sans-serif;

      :active {
        transition: all 0.2s;
        background: ${props => props.theme.maincolor.secundary};
        box-shadow: 0px 10px 50px 0.001px #04122c;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .logo {
      width: 12vw;
    }

    .nav-menu {
      font: 500 13.5px 'Ubuntu', sans-serif;
    }

    .nav-btn {
      width: 11vw;
      height: 5vh;
      font: 500 12.5px 'Ubuntu', sans-serif;
    }
  }

  @media screen and (max-width: 1024px) {
    .logo {
      width: 13vw;
    }

    .nav-menu {
      display: none;
    }

    .nav-btn {
      display: none;
    }

    .nav-menu-icon {
      display: block;
    }
  }

  @media screen and (max-width: 960px) {
    .logo {
      width: 14vw;
    }
  }

  @media screen and (max-width: 640px) {
    .logo {
      display: none;
    }

    .heart-logo {
      display: block;
      width: 6vw;
    }

    .white-space {
      display: block;
    }
  }
`

export default Container
