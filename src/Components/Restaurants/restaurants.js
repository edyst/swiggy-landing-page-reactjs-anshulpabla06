import React from 'react'
import './restaurants.css'
import RSEC from './Rsec/Rsec'
import IMG1 from '../assets/rsec1.png'
import IMG2 from '../assets/rsec2.png'

function restaurants() {
    return (
        <div className="restaurants">
            <RSEC />
            <div className="rsec2">
                <img className="img-rsec1" src={IMG2} />
                <img className="img-rsec2" src={IMG1} />
            </div>
        </div>
    )
}
export default restaurants