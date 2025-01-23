import React from 'react'
import './ReleasedYear.css'
import tv from '../../assets/photos/Movies & shows page images/tv.png'
import A from '../../assets/photos/Movies & shows page images/A.png'
import star from '../../assets/photos/Movies & shows page images/Star 5.png'
import game from '../../assets/photos/Movies & shows page images/game.png'
import fourStar from '../../assets/photos/Movies open page images/four star.png'
import fiveStar from '../../assets/photos/Movies open page images/five star.png'



export default function ReleasedYear({Director ,Music , titleOne , textOne ,titleTwo , textTwo , showYes}) {
  return (
    <div className='ma-right-div'>
        <div className='ma-one-div ma-margin'>
            <div className='ma-one'>
                <img src={tv} alt="" />
                <p>Released Year</p>
            </div>
            <p className='ma-year'>2022</p>
        </div>
        <div className='ma-two-div ma-margin'>
            <div className='ma-one'>
                <img src={A} alt="" />
                <p>Available Languages</p>
            </div>
            <div className='ma-two'>
                <div><p>English</p></div>
                <div><p>Hindi</p></div>
                <div><p>Tamil</p></div>
                <div><p>Telegu</p></div>
                <div><p>Kannada</p></div>
            </div>
        </div>
        <div className='ma-three-div ma-margin'>
            <div className='ma-one ma-gap'>
                <img src={star} alt=""  className='ma-img-star'/>
                <p>Ratings</p>
            </div>
            <div className='ma-three-one-div'>
                <div className='ma-thrree-two-div'>
                    <h5>IMDb</h5>
                    <div className='ma-box-imgandp'>
                        <img src={fourStar} alt="" className='fourstar'/>
                        <p>4.5</p>
                    </div>
                </div>
                <div className='ma-thrree-two-div'>
                    <h5>Streamvibe</h5>
                    <div className='ma-box-imgandp'>
                        <img src={fiveStar} alt="" className='fivestar'/>
                        <p>4</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='ma-four-div ma-margin'>
            <div className='ma-one'>
                <img src={game} alt="" className='ma-img-game' />
                <p>Gernes</p>
            </div>
            <div className='ma-two'>
                <div><p>Action</p></div>
                <div><p>Adventure</p></div>
                {showYes && <div><p>Tamil</p></div>}
            </div>
        </div>
        <div className='ma-five-dev ma-margin'>
            <div className='ma-one'>
                <p>Director</p>
            </div>
            <div className='ma-Director-div'>
                <img src={Director} alt="" />
                <div>
                    <h5>{titleOne}</h5>
                    <p>{textOne}</p>
                </div>
            </div>
        </div>
        <div className='ma-six-div'>
            <div className='ma-one'>
                <p>Music</p>
            </div>
            <div className='ma-Director-div'>
                <img src={Music} alt="" />
                <div> 
                    <h5>{titleTwo}</h5>
                    <p>{textTwo}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
