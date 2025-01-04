import React from 'react'
import './Button.css'


export default function Button({pad , text , img}) {
  return (

       <button className= {`ma-btn ${pad}`}>
            <img src={img} alt="" />
            {text}
        </button>
  )
}
