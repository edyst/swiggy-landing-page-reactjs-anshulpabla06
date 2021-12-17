import React from 'react'
import './footer.css'
import FSEC1 from './fsec1/fsec1'
import FSEC2 from './fsec2/fsec2'
import FSEC3 from './fsec3/fsec3'

const footer = () => {
    return (
        <div className="footer">
            <FSEC1 />
            <FSEC2 />
            <FSEC3 />
        </div>
    )
}
export default footer 