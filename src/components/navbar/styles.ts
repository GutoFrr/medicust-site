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
    cursor: pointer;
  }

  .nav-menu {
    width: 622px;
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
    width: 193px;
    height: 55px;
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
`

export default Container
