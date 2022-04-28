/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import membersArray from './membersData'

interface MembersProps {
  name?: string
  role?: string
}

const Members: React.FC<MembersProps> = () => {
  return (
    <Container>
      {membersArray.map(item => (
        <div className="member-item">
          <div className="member-image"></div>
          <div className="member-description">
            <h3>{item.name}</h3>
            <h6>{item.role}</h6>
          </div>
        </div>
      ))}
      <div className="join-card">
        <h4>Join our team</h4>
        <p>
          Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor
        </p>
        <div className="orange-elipse"></div>
      </div>
    </Container>
  )
}

export default Members
