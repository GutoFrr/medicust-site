import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Hero from '../components/hero'
import Header from '../components/header'
import CTA from '../components/CTA'
import Services from '../components/services'
import TeamMembers from '../components/team-members'
import Call from '../components/call'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Medicust</title>
      </Head>
      <Header />
      <Hero />
      <CTA />
      <Services icon={''} department={''} />
      <TeamMembers />
      <Call />
    </Container>
  )
}

export default Home
