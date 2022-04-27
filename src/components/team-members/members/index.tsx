/* eslint-disable react/jsx-key */
import React from 'react'
import Container from './styles'
import membersArray from './membersData'
import Layout from '../../layout/styles'

interface MembersProps {
  picture: string
  name: string
  role: string
}

const Members: React.FC<MembersProps> = () => {
  return (
    <Container>
      {membersArray.map(item => (
        <div className="member-item">
          <img
            src={item.picture}
            alt="Foto do Profissional"
            className="member-pic"
          />
          <div className="member-description">
            <h3>{item.name}</h3>
            <h6>{item.role}</h6>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Members
