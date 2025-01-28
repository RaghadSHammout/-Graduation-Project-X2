import './Navbar.css'
import logo from '../../assets/photos/logo.png'
import button from '../../assets/photos/Button.png'
import search from'../../assets/photos/search.png'
import vector from'../../assets/photos/vector.png'
import React, { useState , useEffect} from 'react'
import { Link, NavLink , useLocation} from 'react-router-dom'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function Navbar({routePath}) {  
    const [maisopen , setmaisopen]= useState(false)
    const [mascroll, masetScroll] = useState(false);
    const location = useLocation();
    const isMoviceAndShowActive =
    location.pathname.startsWith("/MoviesAndShows") ||
    location.pathname.startsWith("/MoviesPageOpenR/movie") ||
    location.pathname.startsWith("/ShowsPageOpenR/show")  

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
        
  
  return (
    <nav className={`ma-navbar ${mascroll ? 'ma-nav2' : ''}`}>
      <Link to={'/'} >
        <div className='ma-logo'>
            <img src={logo} alt="" />
        </div>
      </Link>
        <ul className={`ma-links ${maisopen ? 'ma-link-open' : ''}`}>
            <li>
                <NavLink to={'/'} className='ma-home' onClick={listdown}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/MoviesAndShows'} onClick={listdown } 
                className={isMoviceAndShowActive ? 'active' : ''}
                >Movies & Shows</NavLink>
            </li>
            <li>
                <NavLink to={'/Support'} onClick={listdown}>Support </NavLink>
            </li>
            <li>
                <NavLink to={'/Subscription'} className='ma-Subscriptions' onClick={listdown}>Subscriptions</NavLink>
            </li>
            <li>
                <NavLink to={'/About uS'}  onClick={listdown}>About US</NavLink>
            </li>
        </ul>
        <div className='ma-icon'>
          <button>Log in</button>
          <img src={search} alt=""  className='ma-img-search'/>
          <img src={vector} alt="" className='ma-img-search' />
       
        </div>
        <div className='ma-button'>
            <img src={button} alt="" onClick={listdown} />
        </div>
        
  </nav>
  )
}

