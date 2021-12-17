/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Restraunt.css'
import imgbu1 from './images/downloadbu1.png'
import imgbu2 from './images/downloadbu2.png'
import mobimg1 from './images/mobimg1.png'
import mobimg2 from './images/mobimg2.png'
export default function Restraunt() {
    return (
        <div id="restraunt">
          <div className="r1">
           <h1 id="headr">Restaurants in your pocket</h1>
           <p id="p1">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
           <div style={{marginTop:-40}}>
           <img className="appstore"  src={imgbu1} />
           <img className="appstore" id="app2"  src={imgbu2} />
           </div>
          </div> 
          
          <div className="mobimg1">
          <img className="mobimages" src={mobimg1} />
          </div> 
          <div className="mobimg2">
          <img style={{paddingTop:40}} className="mobimages" src={mobimg2} />
          </div>
          
        </div>
    )
}
