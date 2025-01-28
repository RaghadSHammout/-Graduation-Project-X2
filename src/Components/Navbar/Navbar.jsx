import './Navbar.css'
import logo from '../../assets/photos/logo.png'
import button from '../../assets/photos/Button.png'
import search from'../../assets/photos/search.png'
import vector from'../../assets/photos/vector.png'
import React, { useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {useLocation } from "react-router-dom";
export default function Navbar() {
    const [maisopen , setmaisopen]= useState(false)
    const [mascroll, masetScroll] = useState(false);

    const listdown = () => {
        setmaisopen(!maisopen);
      };
   

      useEffect(() => {
        const mahandleScroll = () => {
          if (window.scrollY > 50) {
            masetScroll(true); 
          } else {
            masetScroll(false);
          }
        };
    
        window.addEventListener('scroll', mahandleScroll);
    
      
        return () => {
          window.removeEventListener('scroll', mahandleScroll);
        };
      }, []);

      const location = useLocation();
     useEffect(() => {
    window.scrollTo(0, 0);
     }, [location]);  
      
  return (
    <nav className={`ma-navbar ${mascroll ? 'ma-nav2' : ''}`}>
        <div className='ma-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className={`ma-links ${maisopen ? 'ma-link-open' : ''}`}>
            <li>
                <NavLink to={'/'} className='ma-home' onClick={listdown}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/MoviesAndShows'} onClick={listdown}>Movies & Shows</NavLink>
            </li>
            <li>
                <NavLink to={'/Support'} onClick={listdown}>Support </NavLink>
            </li>
            <li>
                <NavLink to={'/Subscription'} className='ma-Subscriptions' onClick={listdown}>Subscriptions</NavLink>
            </li>
        </ul>
        <div className='ma-icon'>
           <img src={search} alt=""  className='ma-img-search'/>
           <img src={vector} alt="" className='ma-img-search' />
        </div>
        <div className='ma-button'>
            <img src={button} alt="" onClick={listdown} />
        </div>
  </nav>
  )
}

