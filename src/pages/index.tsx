import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Hero from '../components/hero'
import Header from '../components/header'
import Navbar from '../components/navbar'
import CTA from '../components/CTA'
import Services from '../components/services'
import TeamMembers from '../components/team-members'
import Call from '../components/call'
import Testimonials from '../components/testimonials'
import BlogPost from '../components/blog-post'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Medicust</title>
      </Head>
      <Header />
      <Navbar />
      <Hero />
      <CTA />
      <Services />
      <TeamMembers />
      <Call />
      <Testimonials />
      <BlogPost />
      <Footer />
    </Container>
  )
}

export default Home
