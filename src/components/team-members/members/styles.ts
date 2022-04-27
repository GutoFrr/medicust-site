import styled from 'styled-components'

const Container = styled.div`
  .member-item {
  }

  .member-pic {
  }

  .member-description {
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
`

export default Container
