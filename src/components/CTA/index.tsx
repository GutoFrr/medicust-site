import React from 'react'
import Layout from '../layout/styles'
import Container from './styles'

const CTA = () => {
  return (
    <Container>
      <Layout>
        <div className="cta">
          <h2>
            Need a doctor for checkup? <br />
            Call for an emergency services!
          </h2>
          <button className="cta-btn">Button</button>
        </div>
      </Layout>
    </Container>
  )
}

export default CTA
