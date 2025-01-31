import './Navbar.css'
import logo from '../../assets/photos/logo.png'
import button from '../../assets/photos/Button.png'
import search from'../../assets/photos/search.png'
import vector from'../../assets/photos/vector.png'
import React, { useState , useEffect} from 'react'
import { Link, NavLink , useLocation} from 'react-router-dom'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function Navbar({}) {  
    const [maisopen , setmaisopen]= useState(false)
    const [mascroll, masetScroll] = useState(false);
    

    const [showSignupPopup, setShowSignupPopup] = useState(false);
    const [isLogin, setIsLogin] = useState(false); 
    const [username, setUsername] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();

    const isMoviceAndShowActive =
    location.pathname.startsWith("/MoviesAndShows") ||
    location.pathname.startsWith("/MoviesPageOpenR/movie") ||
    location.pathname.startsWith("/ShowsPageOpenR/show")  

    const listdown = () => {
        setmaisopen(!maisopen);
      };
    
   

      
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setIsLogin(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('username', loginUsername);
    setUsername(loginUsername);
    setIsLogin(true);
    setShowSignupPopup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLogin(false);
    setUsername('');
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
    <>
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
        <img src={search} alt=""  className='ma-img-search'/>
        <img src={vector} alt="" className='ma-img-search' />
        {isLogin ? (
            <div>
              <span> {username}</span>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <button onClick={() => setShowSignupPopup(true) } className='ma-btn-hover' >Sign Up</button>
          )}
          
          
        </div>
        <div className='ma-button'>
            <button onClick={() => setShowSignupPopup(true)} className='ma-btn-hover' >Sign Up</button>
            <img src={button} alt="" onClick={listdown} />
        </div>  
  </nav>
  

  
  {showSignupPopup && (
  <div className="signup-popup">
    <div className="popup-content">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        {isLogin ? (
          <>
            <label htmlFor='Username'>
              Username:
            </label>
              <input
              id='Username'
                type="text"
                placeholder="Enter username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
           
            <label htmlFor='Password'>
              Password:
              </label>
              <input
                id='Password'
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
           
          </>
        ) : (
          <>
            <label htmlFor='Username2'>
              Username:
              </label>
              <input
              id='Username2'
                type="text"
                placeholder="Enter username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            
            <label htmlFor='Email'>
              Email:
              </label>
              <input type="email" placeholder="Enter email" id='Email'/>
            
            <label htmlFor='Password2'>
              Password:
              </label>
              <input
              id='Password2'
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
            <label htmlFor='Confirm Password'>
              Confirm Password:
            </label>
              <input type="password" placeholder="Confirm password" id='Confirm Password' />
            
          </>
        )}
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        <button type="button" onClick={() => setShowSignupPopup(false)}>Cancel</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <span 
          className="toggle-popup" 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Sign Up" : " Log In"}
        </span>
      </p>
    </div>
  </div>
)}
    </>
  );
}

