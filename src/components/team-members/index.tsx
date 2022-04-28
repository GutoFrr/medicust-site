import React from 'react'
import Layout from '../layout/styles'
import Members from './members'
import Container from './styles'

const TeamMembers = () => {
  return (
    <Container>
      <Layout>
        <div className="team-members">
          <div className="members-title">
            <h3>Professional Care Provider</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>
          </div>
          <Members />
        </div>
      </Layout>
    </Container>
  )
}

export default TeamMembers
