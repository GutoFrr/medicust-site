import React, { useState } from 'react'
import Layout from '../layout/styles'
import Container from './styles'
import { Icon } from '@iconify/react'

const Advertising = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const url = playVideo
    ? 'https://www.youtube.com/embed/u3CkPHV1VIQ?autoplay=1'
    : 'https://www.youtube.com/embed/u3CkPHV1VIQ'
  const handleVideoClick = () => setPlayVideo(!playVideo)

  return (
    <Container>
      <Layout>
        <div className="advertising">
          <div className="advertising-text">
            <h6>Manage your health care</h6>
            <h2>
              Trust us to be there to help all and make things weel again.
            </h2>
            <button className="advertising-btn">All Doctors</button>
          </div>
          <div onClick={handleVideoClick} className="play-btn">
            {/* <Icon icon="carbon:play-filled-alt" /> */}
            {/* <Icon icon="carbon:pause-filled" /> */}
          </div>
          <div>
            <iframe
              width="552"
              height="468"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video"
            ></iframe>
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default Advertising
