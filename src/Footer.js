import React from 'react'
import './Footer.css'
import fimg1 from './images/foimg1.png'
import fimg2 from './images/foimg2.png'
import swiggylogo from './images/swiggylogo.png'
import City from './City.json';
import { FaFacebookF,FaInstagram,FaPinterestP,FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="fotr">
          <div id="fd1">
              <div className="about">
                  <h3 clasName="fhead">Company</h3>
                  <ul>
                    <a href="index.html"><li>About us</li></a>
                    <a href="index.html"><li>Team</li></a>
                    <a href="index.html"><li>Carrers</li></a>
                    <a href="index.html"><li>Swiggy Blog</li></a>
                    <a href="index.html"><li>Bug Bounty</li></a>
                    <a href="index.html"><li>Swiggy Super</li></a>
                    <a href="index.html"><li>Swiggy Corparate</li></a>
                    <a href="index.html"><li>Swiggy Instamart</li></a>
                  </ul>
              </div>
              <div className="about">
              <h3 clasName="fhead">Contact</h3>
                  <ul>
                    <a href="index.html"><li>Help &amp; Support</li></a>
                    <a href="index.html"><li>Partner with us</li></a>
                    <a href="index.html"><li>Ride with us</li></a>
                  </ul>
              </div>
              <div className="about">
              <h3 clasName="fhead">Legal</h3>
                  <ul>
                    <a href="index.html"><li>Terms &amp; Conditions</li></a>
                    <a href="index.html"><li>Refund &amp; Cancellation</li></a>
                    <a href="index.html"><li>Privacy Policy</li></a>
                    <a href="index.html"><li>Cookie Policy</li></a>
                    <a href="index.html"><li>Offer Terms</li></a>
                    <a href="index.html"><li>Phishing &amp; Fraud</li></a>
                  </ul>
              </div>
              <div className="about1">
              <a href="index.html"><img alt="" src={fimg1} /></a>
              <a href="index.html"><img alt="" src={fimg2} /></a>
              </div>
            </div>
              <hr className="hrs"></hr>
              <div>
              <h3 id="del">WE DELIVER TO</h3>
              <div id="pop">

              <div className="pty">
                <ul>
              {City.city[0].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>

              <div className="pty">
                <ul>
              {City.city[1].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>

              <div className="pty">
                <ul>
              {City.city[2].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>

              <div className="pty">
                <ul>
              {City.city[3].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>

              </div>  
              </div>
              <hr className="hrs"></hr>
              <div id="lastfooter">
               <div>
                 <a href="index.html"><img class="" width="200"alt="" src={swiggylogo} /></a>
                 </div>
               <div>
                 <h3 id="cop">© 2021 Swiggy</h3>
                 </div>
                <div id="logo">
                <FaFacebookF style={{color:'white',fontSize:30,margin:10}} /> 
                <FaPinterestP style={{color:'white',fontSize:30,margin:10}}/>
                <FaInstagram style={{color:'white',fontSize:30,margin:10}} />
               
                <FaTwitter style={{color:'white',fontSize:30,margin:10}}/>
                </div>
              </div>
        </div>
    )
}
