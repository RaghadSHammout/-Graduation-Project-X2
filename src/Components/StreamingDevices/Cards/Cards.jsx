
import React from 'react'
import { SkileData } from '../../Data/SkilsData'
import Card from "../Card/Card"
import './Cards.css';
import StreamingDevices from '../StreamingDevices';
export default function Cards() {
  return (
    <>
   <section className='Ma'>
   <div
    className='MAA_card '>
    <StreamingDevices/>
    <div className='MAA'>
      {SkileData.map((e,index)=>{
        return(
          <Card key={index} title={e.title} img={e.img} desc={e.desc}/>
        )   
      })}
    </div>
    </div>
   </section>
    </>
   
  )
}

