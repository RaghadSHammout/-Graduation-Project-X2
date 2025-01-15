import './Hero.css'
import'../Title/Title'
import Title from '../Title/Title'
import Button from '../Button/Button'
import triangle from '../../assets/photos/Home page images/triangle.png'
import { useEffect, useState } from 'react'


export default function Hero() {
    const number = 118;
    const[isCropped , setisCropped] = useState(false);
    const[SliceText , setSliceText] = useState("StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.")
    


  useEffect(() =>{
    const handleResize = () =>{
      if(window.screen.width<700){
        setisCropped(true);
      }else {
        setisCropped(false);
      }
    };

    window.addEventListener('resize' , handleResize)


    return() =>{
      window.removeEventListener('resize' , handleResize);
    };
  },[])
  return (
    <div className='ma-hero'>
        <div className='ma-box'>
            <div className='ma-contant'>
                <Title 
                    maMargin = {'ma-50'}
                    size={'ma-size , ma-title '}
                    matext={'ma-text'}
                    title= {"The Best Streaming Experience"}
                    text = {isCropped ? SliceText.slice(0 , number) : SliceText }
                /> 
                <Button
                 shwo= {true}
                img={triangle}
                text = {" Start Watching Now"}/>
            </div>
        </div>
    </div>
  )
}
