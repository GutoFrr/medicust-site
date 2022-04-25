import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>JVM</title>
      </Head>

      <h1>JVM Structure</h1>
      <p>Next.js development structure by JVM.</p>
    </Container>
  )
}

export default Home
