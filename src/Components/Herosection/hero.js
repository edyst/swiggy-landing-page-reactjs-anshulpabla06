import React from 'react'
import HSEC1 from './hsec1/hsec1'
import HSEC2 from './hsec2/hsec2'
import HSEC3 from './hsec3/hsec3'
import HSEC4 from './hsec4/hsec4'
import './hero.css'

const hero = () => {
    return (
        <div className="herosection">
            <div className="hero-subsec">
                <HSEC1 />
                <HSEC2 />
                <HSEC3 />
                <HSEC4 />
            </div>
        </div>
    )
}
export default hero