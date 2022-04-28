/* eslint-disable react/jsx-key */
import React from 'react'
import postCards from './postCardsData'
import Container from './styles'

const PostCards = () => {
  return (
    <Container>
      {postCards.map(item => (
        <div className="post-card-item">
          <div>{item.image}</div>
          <div className="post-card-text">
            <p className="date">{item.date}</p>
            <h4 className="title">{item.title}</h4>
            <h6 className="link">{item.link}</h6>
            <p className="release">{item.release}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default PostCards
