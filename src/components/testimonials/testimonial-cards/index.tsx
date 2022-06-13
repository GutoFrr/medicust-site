import React from 'react'
import Container from './styles'
import testimonialCards from './testimonialData'

interface TestimonialProps {
  name?: string
  role?: string
  title?: string
  subtitle?: string
}

const TestimonialCards: React.FC<TestimonialProps> = () => {
  return (
    <Container>
      {testimonialCards.map((item, key) => (
        <div className="testimonial-item" key={key}>
          <div className="elipses">
            <div className="gray"></div>
            <div className="primary"></div>
          </div>
          <div className="testimonial-title">
            <h5>{item.name}</h5>
            <h6>{item.role}</h6>
          </div>
          <div className="testimonial-text">
            <h5>{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default TestimonialCards
