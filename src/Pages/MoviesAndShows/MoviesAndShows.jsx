import React from 'react'
import "./MoviesAndShows.css";
import Card from '../../Components/CardTrinding/Card' 
import imagcard1 from '../../assets/photos/Movies & shows page images/Trending section card(1).jpg'
import imagcard2 from '../../assets/photos/Movies & shows page images/Trending section card(2).jpg'
import imagcard3 from '../../assets/photos/Movies & shows page images/Trending section card(3).jpg'
import imagcard4 from '../../assets/photos/Movies & shows page images/Trending section card(4).jpg'
import imagcard5 from '../../assets/photos/Movies & shows page images/Trending section card(5).jpg'
import imagNewReleasescard1 from '../../assets/photos/Movies & shows page images/New releases section card (5).jpg'
import imagNewReleasescard2 from '../../assets/photos/Movies & shows page images/New releases section card(2).jpg'
import imagNewReleasescard3 from '../../assets/photos/Movies & shows page images/New releases section card(3).jpg'
import imagNewReleasescard4 from '../../assets/photos/Movies & shows page images/New releases section card (4).jpg'
import imagNewReleasescard5 from '../../assets/photos/Movies & shows page images/New releases section card (6).jpg'

import iconduration from '../../assets/photos/Movies & shows page images/Iconduration.png'
import iconviews from '../../assets/photos/Movies & shows page images/Iconviews.png'


export default function MoviesAndShows() {
    const cardsDataTrending = [
        {
          image: imagcard1,
          iconDuration: iconduration,
          duration: '2h 15min',
          iconViews: iconviews,
          views: '2K',
          
       
        },
        {
          image: imagcard2,
          iconDuration: iconduration,
          duration: '1h 57min',
          iconViews: iconviews,
          views: '1.5K',
        
        },
        {
          image: imagcard3,
          iconDuration: iconduration,
          duration: '2h 10min',
          iconViews: iconviews,
          views: '1.8K',
       
        },
        {
          image: imagcard4,
          iconDuration: iconduration,
          duration: '2h 20min',
          iconViews: iconviews,
          views: '3K',
       
        },
        {
          image: imagcard5,
          iconDuration: iconduration,
          duration: '1h 42min',
          iconViews: iconviews,
          views: '5K',
       
        },
      ];
      const cardsDataNewReleases = [
        {
          image:imagNewReleasescard1,
          releaseDate:'14 April 2023',
       
        },
        {
          image:imagNewReleasescard2,
          releaseDate:'14 April 2023',
       
        },
        {
          image:imagNewReleasescard3,
          releaseDate:'14 April 2023',
       
        },
        {
          image:imagNewReleasescard4,
          releaseDate:'14 April 2023',
       
        },
        {
          image:imagNewReleasescard5,
          releaseDate:'14 April 2023',
       
        },
      ];
    return (
        <>
        <div className='Trinding-Now'>
        <div className='Trinding-Now-cards'>
      {cardsDataTrending .map((card, index) => (
         <Card
         key={index}
         image={card.image}
         views={card.views}
         duration={card.duration}
         iconViews={card.iconViews}
         iconDuration={card.iconDuration}
       />
      ))}
    </div>
        </div>
        <div className='New-Releases'>
        <div className='New-Releases-cards'>
      {cardsDataNewReleases.map((card, index) => (
         <Card
         key={index}
         image={card.image}
         releaseDate={card.releaseDate}
       />
      ))}
    </div>
        </div>
      
        </>
    )
}
