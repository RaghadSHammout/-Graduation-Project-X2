import React from "react";
import FooterImg from "../../assets/photos/footer image.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Footer.css";
import FaFacebook from "../../assets/photos/facebookicon.png";
import twittericon from "../../assets/photos/twittericon.png";
import linkedinicon from "../../assets/photos/linkedinicon.png";
function Footer() {
  return (
    <>
      <div className="conter-zq">
        <div className="image-container">
          <img className="ImagFooter-zq" src={FooterImg} alt="footer image" />
          <div className="overlay">
            
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
          
          </div>
        </div>
      </div>

      <div className="conterfooter-zq">
        <div className="footerlink">
          <div className="Home">
            <h5 className="heading-zq">Home</h5>
            <a href="/" className="links">
              Categories
            </a>
            <a href="/" className="links">
              Devices
            </a>
            <a href="/" className="links">
              Pricing
            </a>
            <a href="/" className="links">
              FAQ
            </a>
          </div>
          <div className="Movies">
            <h5 className="heading-zq">Movies</h5>
            <a href="/" className="links">
              Gernes
            </a>
            <a href="/" className="links">
              Trending
            </a>
            <a href="/" className="links">
              New Release
            </a>
            <a href="/" className="links">
              Popular
            </a>
          </div>
          <div className="Shows">
            <h5 className="heading-zq">Shows</h5>
            <a href="/" className="links">
              Gernes
            </a>
            <a href="/" className="links">
              Trending
            </a>
            <a href="/" className="links">
              New Release
            </a>
            <a href="/" className="links">
              Popular
            </a>
          </div>
          <div className="Support">
            <h5 className="heading-zq">Support</h5>
            <a href="/" className="links">
              Contact Us
            </a>
          </div>
          <div className="Subscription">
            <h5 className="heading-zq"> Subscription</h5>
            <a href="/" className="links">
              Plans
            </a>
            <a href="/" className="links">
              Features
            </a>
          </div>
          <div className="contecticonfooter">
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
          </div>
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
