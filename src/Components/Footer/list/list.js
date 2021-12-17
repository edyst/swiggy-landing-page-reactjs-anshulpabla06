import React from 'react'
import '../footer.css'


const list = (props) => {
    return (
        <ul className={props.classlist}>
            <li className="listhead">{props.lhead}</li>
            <li><a href="#" className="listitem" >{props.litem1}</a></li>
            <li><a href="#" className="listitem" >{props.litem2}</a></li>
            <li><a href="#" className="listitem" >{props.litem3}</a></li>
            <li><a href="#" className="listitem" >{props.litem4}</a></li>
            <li><a href="#" className="listitem" >{props.litem5}</a></li>
            <li><a href="#" className="listitem" >{props.litem6}</a></li>
            <li><a href="#" className="listitem" >{props.litem7}</a></li>
            <li><a href="#" className="listitem" >{props.litem8}</a></li>

        </ul>
    )
}
export default list