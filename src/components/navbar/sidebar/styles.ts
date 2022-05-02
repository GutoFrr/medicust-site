import styled from 'styled-components'

const Container = styled.div`
  .menu-icon {
    color: #f9f9f9;
    font-size: 3vw;
    cursor: pointer;
  }

  .sidebar {
    display: none;
    width: 26vw;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background: #fff;
  }

  .sidebar.active {
    display: block;
  }

  .sidebar-title {
    height: 78px;
    background: ${props => props.theme.maincolor.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #f9f9f9;

    .close-icon {
      cursor: pointer;
      font-size: 2.4vw;
    }

    h4 {
      font: 700 16px 'Ubuntu', sans-serif;
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
  }
`

export default Container
