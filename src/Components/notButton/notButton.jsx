import React from 'react'
import "./notButton.css"

function notButton({ div, divText, text }) {
  return (
    <div className={`to-not-button  ${div}`}>
      <p className={`to-not-button-text  ${divText}`}>
        {text}
      </p>
    </div>
  )
}

export default notButton