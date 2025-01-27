import React from "react";
import FooterImg from "../../assets/photos/footer image.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Footer.css";
import FaFacebook from "../../assets/photos/facebookicon.png";
import twittericon from "../../assets/photos/twittericon.png";
import linkedinicon from "../../assets/photos/linkedinicon.png";
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="conter-zq">
        <motion.div
          variants={fadeIn("up" , 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.7}}
         className="image-container">
          <img className="ImagFooter-zq" src={FooterImg} alt="footer image" />
          <motion.div 
           variants={fadeIn("left" , 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.62}}
          className="overlay">
            
              <Title
                maMargin="info-zq"
                size="zq-title"
                matext="ma-text"
                title={"Start your free trial today!"}
                text={
                  "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
                }
              />
          
            <Button
              text={"Start a Free Trail"}
            />
          
          </motion.div>
        </motion.div>
      </div>

      <div className="conterfooter-zq">
        <div className="footerlink">
          <motion.div
             variants={fadeIn("up" , 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false , amount:0.7}}
           className="Home">
            <h5 className="heading-zq">Home</h5>
            <Link to="/#Categories" className="links">
            Categories
          </Link>
          <Link to="/#Devices" className="links">
            Devices
          </Link>
          <Link to="/#Pricing" className="links">
            Pricing
          </Link>
          <Link to="/#FAQ" className="links">
            FAQ
          </Link>
          </motion.div>
          <motion.div
             variants={fadeIn("up" , 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false , amount:0.8}}
           className="Movies">
            <h5 className="heading-zq">Movies</h5>
            <Link to="/MoviesAndShows#genres" className="links">
            Genres
          </Link>
          <Link to="/MoviesAndShows#trending" className="links">
            Trending
          </Link>
          <Link to="/MoviesAndShows#new-release" className="links">
            New Release
          </Link>
          <Link to="/MoviesAndShows#popular" className="links">
            Popular
          </Link>
          </motion.div>
          <motion.div 
           variants={fadeIn("up" , 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.65}}
          className="Shows">
            <h5 className="heading-zq">Shows</h5>
            <Link to="/MoviesAndShows#genres-Shows" className="links">
              Genres
            </Link>
            <Link to="/MoviesAndShows#trending-Shows" className="links">
              Trending
            </Link>
            <Link to="/MoviesAndShows#new-release-Shows" className="links">
              New Release
            </Link>
            <Link to="/MoviesAndShows#popular-Shows" className="links">
              Popular
            </Link>
          </motion.div>
          <motion.div 
           variants={fadeIn("up" , 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.7}}
          className="Support">
            <h5 className="heading-zq">Support</h5>
            <Link to="/Support#Contact-Us" className="links">
            Contact Us
            </Link>
          </motion.div>
          <motion.div 
           variants={fadeIn("up" , 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.68}}
          className="Subscription">
            <h5 className="heading-zq"> Subscription</h5>
            <Link to="/Subscription#Pricing" className="links">
            Plans
          </Link>
          <Link to="/Subscription#features" className="links">
            Features
          </Link>
          </motion.div>
          <motion.div 
           variants={fadeIn("up" , 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.7}}
          className="contecticonfooter">
            <h5 className="heading-zq">Connect With Us</h5>
            <div className="contecticon">
              <div className="contericon-zq">
                <a href="/" className="links">
                  <img src={FaFacebook} alt="Icon Fecbook" />
                </a>
              </div>
              <div className="contericon-zq">
                <a href="/" className="links">
                  <img src={twittericon} alt="Icon twitter" />
                </a>
              </div>
              <div className="contericon-zq">
                <a href="/" className="links">
                  <img src={linkedinicon} alt="Icon linkedin" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="footerBar">
          <div className="SitePolicies-zq">
            <p>@2023 streamvib, All Rights Reserved</p>
          </div>
          <div>
            <ul className="SitePolicies">
              <li className="SitePolicieslist">Terms of Use</li>
              <span className="Line-zq"></span>
              <li className="SitePolicieslist">Privacy Policy</li>
              <span className="Line-zq"></span>
              <li className="SitePolicieslist">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
