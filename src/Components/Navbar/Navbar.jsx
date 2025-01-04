import './Navbar.css'
import logo from '../../assets/photos/logo.png'
import button from '../../assets/photos/Button.png'
import search from'../../assets/photos/search.png'
import vector from'../../assets/photos/vector.png'
import React, { useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isopen , setisopen]= useState(false)
    const [scroll, setScroll] = useState(false);

    const listdown = () => {
        setisopen(!isopen);
      };

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScroll(true); 
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
      
  return (
    <nav className={`ma-navbar ${scroll ? 'ma-nav2' : ''}`}>
        <div className='ma-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className={`ma-links ${isopen ? 'ma-link-open' : ''}`}>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/MoviesAndShows'}>Movies & Shows</NavLink>
            </li>
            <li>
                <NavLink to={'/Support'}>Support</NavLink>
            </li>
            <li>
                <NavLink to={'/Subscription'}>Subscriptions</NavLink>
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
