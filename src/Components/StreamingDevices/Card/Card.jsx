


import React from 'react'
import '../Card/Card.css'
export default function Card( {img,title,desc}) {
  return (
    <div className='MA_Card'>

    <div className='d-flex MA_WtitleImg'>
<div className='MA_CardImg'>    <img src={img} alt="img" />
</div>   
 <h5>{title}</h5>
    </div>
      <p>{desc}</p>
    </div>
  )
}

