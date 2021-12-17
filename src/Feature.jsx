
import React from 'react';
import './feature.css';

export default function Feature(props) {
    return (
        <div className="feature">
           <div className="flexfeature">
              <img className="fimg" alt="" src={props.imgsrc}/>
             <h3 className="subhead3">{props.title}</h3>
             <p className="p3">{props.data}</p>
           </div>
        </div>
    )
}