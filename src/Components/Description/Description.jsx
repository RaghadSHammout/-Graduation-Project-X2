import React from 'react'
import "./Description.css"
function Description(props) {
    return (
        <div className='desc desc-padding w-100 d-flex flex-column'>
            <h6 className='to-title'>{props.title}</h6>
            <p className='to-text'>
                {props.text}
            </p>
        </div>
    )
}

export default Description