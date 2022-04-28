import React from 'react'
import Layout from '../layout/styles'
import Container from './styles'
import TestimonialCards from './testimonial-cards'

const Testimonials = () => {
  return (
    <Container>
      <Layout>
        <div className="testimonials">
          <div className="testimonials-title">
            <h3>Patient Testimonials</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>
          </div>
          <div className="testimonials-cards">
            <TestimonialCards />
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default Testimonials
