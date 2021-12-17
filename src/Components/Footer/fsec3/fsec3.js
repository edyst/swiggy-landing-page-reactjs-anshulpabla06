import React from 'react'
import '../footer.css'
import FB from '../../assets/fb.png'
import IG from '../../assets/ig.png'
import Twitter from '../../assets/twitter.png'
import Pintrest from '../../assets/pintrest.png'
import Swiggy from '../../assets/logo_swiggy.png'



const fsec3 = () => {
    return (
        <div className="fsec3">
            <img className="logo_swiggy" src={Swiggy} alt="logo" />
            <h3 className="footer-copyright">© 2021 Swiggy</h3>
            <div className="social_list">
            <img className="social-item" src={FB} alt="logo" />
            <img className="social-item" src={Pintrest} alt="logo" />
            <img className="social-item" src={IG} alt="logo" />
            <img className="social-item" src={Twitter} alt="logo" />
            </div>
        </div>
    )
}
export default fsec3