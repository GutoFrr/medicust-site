import styled from 'styled-components'

const Container = styled.div`
  background: #fff;
  .header {
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.maincolor.secundary};
    font: 500 16px 'Ubuntu', sans-serif;
    line-height: 18px;
  }

  .end-text {
    display: flex;
    column-gap: 60px;
  }
`

export default Container
