import React from 'react'
import '../hero.css'
import Logo from '../../assets/Swiggy_logo.png'
import Button from '../Buttons/button'


const hsec1 = () => {
    return (
        <div className="hsec1">
            <img className="logo" src={Logo} alt="swiggylogo" />
            <div className="button-sect">
                <Button  classes={'login-btn'} name={'Login'} />
                <Button  classes={'sign-up-btn'} name={'Sign up'} />
            </div>
        </div>
    )
    }    
export default hsec1