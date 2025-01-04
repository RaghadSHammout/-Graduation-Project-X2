import React from 'react'
import './Hero.css'
import'../Title/Title'
import Title from '../Title/Title'
import Button from '../Button/Button'
import triangle from '../../assets/photos/Home page images/triangle.png'

export default function Hero() {
  return (
    <div className='ma-hero'>
        <div className='ma-box'>
            <div className='ma-contant'>
                <Title
                    maMargin = {'ma-50'}
                    size={'ma-size'}
                    title= {"The Best Streaming Experience"}
                    text = {"StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."}
                />
                <Button
                img={triangle}
                text = {" Start Watching Now"}/>
            </div>
        </div>
    </div>
  )
}
