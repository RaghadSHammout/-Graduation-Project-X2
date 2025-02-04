import React, {useEffect, useState } from 'react'
import './Form.css'
import Title from '../Title/Title'
import supportImg from '../../assets/photos/Support page/Welcome to our support div img.png';
import Button from '../Button/Button';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useLocation } from 'react-router-dom';
export default function Form() {
  const [value, setValue] = useState()
  const [isClick, setisClick] = useState(false)

  const handleClick = () => {
    setisClick(!isClick)
  }
  const location = useLocation(); 
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
      }
    };
    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, [location]);

  return (
    <div className='ma-allbox explore-m-bot' id="Contact-Us">
      <div className='ma-left-dev'>
        <Title
          title={'Welcome to our support page!'}
          size={'ma-title2'}
          text={"We're here to help you with any problems you may be having with our product."}
          matext={'ma-text2'}
        />
        <div className='ma-supportImg'>
          <img src={supportImg} alt="" />
        </div>
      </div>
      <form className='ma-right-dev'>
        <div className='ma-one'>
          <div className='ma-flex'>
            <label htmlFor="First" className='ma-label'>First Name</label>
            <input type="text" placeholder='Enter First Name' id='First' className='ma-input-width ma-bordar-input' />
          </div>
          <div className='ma-flex'>
            <label htmlFor="Last" className='ma-label'>Last Name</label>
            <input type="text" placeholder='Enter Last Name' id='Last' className='ma-input-width ma-bordar-input' />
          </div>
        </div>
        <div className='ma-two'>
          <div className='ma-flex'>
            <label htmlFor="Email" className='ma-label'>Email</label>
            <input placeholder='Enter your Email' type="email" id='Email' className='ma-input-width ma-bordar-input' />
          </div>
          <div className='ma-flex'>
            <label htmlFor="Phone" className='ma-label'>Phone Number</label>
            <div className='ma-select'>
              <PhoneInput
                defaultCountry='IN'
                placeholder="Enter phone number"
                value={value}
                onChange={setValue} />
            </div>
          </div>
        </div>
        <div className='ma-flex ma-Message'>
          <label htmlFor="Message" className='ma-label' >Message</label>
          <input type="text" placeholder='Enter your Message' id='Message' className='ma-input-width3 ma-bordar-input' />
        </div>
        <div className='ma-four'>
          <div className='ma-box-checkbox'>
            <input type="checkbox" className='ma-checkbox' />
            <span className='ma-span' onClick={handleClick}>
              {isClick ? '\u2713' : ''}
            </span>
            <label htmlFor="">I agree with Terms of Use and Privacy Policy</label>
          </div>
          <div className='ma-button send-message'>
            <Button
              text={'Send Message'}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
