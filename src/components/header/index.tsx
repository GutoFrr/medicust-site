import React from 'react'
import Layout from '../layout/styles'
import Navbar from '../navbar'
import Container from './styles'

const Header = () => {
  return (
    <Container>
      <Layout>
        <div className="header">
          <h5>9470 Riverview, Zion 60099</h5>
          <div className="end-text">
            <h5>medicust@gmail.com</h5>
            <h5>+88 564 867 4687</h5>
          </div>
        </div>
      </Layout>
      <Navbar />
    </Container>
  )
}

export default Header
