
import React from 'react'
//import '../Card/CardShow.css'
export default function CardShow({ title, des, h, icon, extraImages, num }) {
  return (

    <div  >
      <div className='Card_PageShow ' >
        <div className=' MA_paddingBotton'>
          <div className='color_title'>
            <h1>
              {title}
            </h1>
            <p>
              {h}
            </p>
          </div>
          <div className='Container_startandnum'>
            <div className='  Card_start'>
              <div className='MA_border '>
                <div className='image d-flex '> {icon.map((singleIcon, index) => (<img key={index} src={singleIcon} alt={`icon-${index}`} />))}
                </div>
                <div> {extraImages ? (<div className="extra-images"> {extraImages.map((image, index) => (<img key={index} src={image} alt={`extra-${index}`} />))} </div>) : null}
                </div>
                <div className='MA_beforimg'>
                  <p>
                  {num}
                </p></div>
              </div>
            </div>
          </div>
        </div>

        <div className='MA_paragraph'>
          <p>
            {des}
          </p>
        </div>

      </div>
    </div>
  )
}


