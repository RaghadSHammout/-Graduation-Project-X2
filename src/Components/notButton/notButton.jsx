import React from 'react'
import "./NotButton.css"

function NotButton({ div, divText, text }) {
  return (
    <div className={`to-not-button  ${div}`}>
      <span className={`to-not-button-text  ${divText}`}>
        {text}
      </span>
    </div>
  )
}
NotButton.defaultProps = {
  div: "to-not-button",
  divText : "to-not-button-text",
  text: "Top 10 In"
};
export default NotButton