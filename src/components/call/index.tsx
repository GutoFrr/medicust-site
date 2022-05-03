import React from 'react'
import Container from './styles'

const Call = () => {
  return (
    <Container>
      <div className="call-container">
        <div className="call-card">
          <h3>We always ready for a challenge.</h3>
          <div className="phone-number">
            <div className="primary" />
            <h5>+00 568 467 46</h5>
          </div>
          <div className="email">
            <h5>medicust@gmail.com</h5>
            <div className="orange" />
          </div>
        </div>
        <div className="call-text">
          <h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="stats">
            <div className="clients">
              <h4>8648+</h4>
              <h6>Satisfied Clients</h6>
            </div>
            <div className="awards">
              <h4>57658+</h4>
              <h6>World Awards</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Call
