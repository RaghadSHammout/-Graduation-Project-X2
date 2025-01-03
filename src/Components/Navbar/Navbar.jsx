import './Navbar.css'
import logo from '../../assets/photos/logo.png'
import button from '../../assets/photos/Button.png'
import search from'../../assets/photos/search.png'
import vector from'../../assets/photos/vector.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isopen , setisopen]= useState(false)
    const listdown = () => {
        setisopen(!isopen);
      };
      

  return (
    <nav className='ma-navbar'>
        <div className='ma-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className={`ma-links ${isopen ? 'ma-link-open' : ''}`}>
            <li  className='ma-active'>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/MoviesAndShows'}>Movies & Shows</Link>
            </li>
            <li>
                <Link to={'/Support'}>Support</Link>
            </li>
            <li>
                <Link to={'/Subscription'}>Subscriptions</Link>
            </li>
        </ul>
        <div className='ma-icon'>
           <img src={search} alt="" />
           <img src={vector} alt="" />
        </div>
        <div className='ma-button'>
            <img src={button} alt="" onClick={listdown} />
        </div>
  </nav>
  )
}
