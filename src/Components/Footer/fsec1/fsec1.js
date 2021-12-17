import React from 'react'
import '../footer.css'
import IStore from '../../assets/istore.png'
import FGPLAY from '../../assets/fgplay.png'
import List from '../list/list'

const fsec1 = () => {
    return (
        <div className="fsec1">

            <List
                classlist={'list'}
                lhead={'Company'}
                litem1={'About us'}
                litem2={'Team'}
                litem3={'Careers'}
                litem4={'Swiggy Blog'}
                litem5={'Bug Bounty'}
                litem6={'Swiggy Super'}
                litem7={'Swiggy Corporate'}
                litem8={'Swiggy Instamart'} />


            <List
                classlist={'list'}
                lhead={'Contact'}
                litem1={'Help & Support'}
                litem2={'Partner with us'}
                litem3={'Ride with us'}
                litem4={''} litem5={''}
                litem6={''} litem7={''}
                litem8={''} />


            <List
                classlist={'list'}
                lhead={'Legal'}
                litem1={'Terms & Conditions'}
                litem2={'Refund & Cancellation'}
                litem3={'Privacy Policy'}
                litem4={'Cookie Policy'}
                litem5={'Offer Terms'}
                litem6={'Phishing & Fraud'}
                litem7={''}
                litem8={''} />


            <div className="fsec1-img">
                <img src={IStore} className="fsec1-img-1" alt="istore" />
                <img src={FGPLAY} className="fsec2-img-2" alt="gplay" />
            </div>

        </div>
    )
}
export default fsec1