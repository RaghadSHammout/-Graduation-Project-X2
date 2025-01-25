import React from 'react'
import './StrimingCard.css'
export default function StrimingCard({ img, title, desc }) {
  return (
    <div className='MA_Card'>
      <div className='MA_WtitleImg'>
        <div className={"streaming-img-div"}>
          <div className='MA_CardImg'>
            <img src={img} alt="img" />
          </div>
        </div>
        <h5>{title}</h5>
      </div>

      <p className={"streaming-paragraph"}>{desc}</p>
    </div>
  )
}

