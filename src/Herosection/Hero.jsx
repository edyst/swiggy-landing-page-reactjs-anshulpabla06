/* eslint-disable jsx-a11y/heading-has-content */

import React, { Component } from 'react';
import './hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {FaCrosshairs} from 'react-icons/fa'

export default class Hero extends Component {
   
    render() {
        return (
            
            <>
            <div className="hero1">
                <div className="navlogo">
                <img className="logo" alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"/>
                <div class="btn-group logingrp">
               
                <a href="index.html" className="login">Login</a>
                <a  href="index.html" className="signup">Sign Up</a>
                </div>
                </div>
                <br/>
                <div id="text1">
              
                <h1 id="animateh"></h1>
                <h3 id="subh1">Order food from favourite restaurants near you.</h3>
                   <br/>
                 
               </div>
               <div className="inputbar">
               <input type="text" id="location" placeholder="Enter your delivery location" maxlength="40" /> 
               <div className="btn-group locategrp">
                   <button id="locatebtn"> <FaCrosshairs style={{fontSize:15,margin:5}}/>Locate Me</button>
                   <button className="btnfood" >FIND FOOD</button>
                </div>
                </div>
                <div id="ul" style={{marginTop:40}}> 

                  <h4 id="popcities">POPULAR CITIES IN INDIA</h4>
                  <ul className="citieslist">
                        <li className="cityname"><a href="index.html" className="odd">Ahmedabad</a></li>
                        <li className="cityname"><a href="index.html" className="even">Bangalore</a></li>
                        <li className="cityname"><a href="index.html" className="odd">Chennai</a></li>
                        <li className="cityname"><a href="index.html" className="even">Delhi</a></li>
                        <li className="cityname"><a href="index.html" className="odd">Gurgaon</a></li>
                        <li className="cityname"><a href="index.html" className="even">Hyderabad</a></li>
                        <li className="cityname"><a href="index.html" className="odd">Kolkata</a></li>
                        <li className="cityname"><a href="index.html" className="even">Mumbai</a></li>
                        <li className="cityname"><a href="index.html" className="odd">Pune</a></li>
                        <li className="cityname"><a href="index.html" className="even">&amp; more.</a></li>
    </ul>
    </div>
             </div>
             
            </>
        );
    }
}