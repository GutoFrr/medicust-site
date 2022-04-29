import React from 'react'
import Layout from '../layout/styles'
import PostCards from './postCards'
import Container from './styles'

const BlogPost = () => {
  return (
    <Container>
      <Layout>
        <div className="blog-post" id="Blog">
          <div className="blog-banner">
            <h2>Get Every Single Updates Here.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="elipses">
              <div className="primary"></div>
              <div className="orange"></div>
            </div>
          </div>
          <div className="post-cards">
            <PostCards />
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default BlogPost
