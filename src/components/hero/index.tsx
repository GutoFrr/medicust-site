import React from 'react'
import Layout from '../layout/styles'
import Container from './styles'

const Hero = () => {
  return (
    <Container>
      <Layout>
        <div className="hero">
          <div className="hero-content">
            <h4>Medical And Health</h4>
            <h1>A professional and friendly care provider.</h1>
            <p>Excepteur sint occaecat cupidatat non proident sunt officia</p>
            <button className="hero-btn">All Doctors</button>
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default Hero
