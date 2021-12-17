import React from 'react'
import '../footer.css'
import List from '../list/list'


const fsec2 = () => {
    return (
        <div className="fsec1">

            <List
                classlist={'list'}
                lhead={'We Deliver to'}
                litem1={'Abohar'}
                litem2={'Adilabad'}
                litem3={'Adityapur'}
                litem4={'Adoni'}
                litem5={'Agartala'}
                litem6={'Agra'}
                litem7={'Ahmedabad'}
                litem8={'Aligarh'} />


            <List
                classlist={'space list'}
                litem1={'Baddi'}
                litem2={'Bagalkot'}
                litem3={'Bagdogra'}
                litem4={'Bahadurgarh'}
                litem5={'Bahraich'}
                litem6={'Bajpe'}
                litem7={'Balaghat'}
                litem8={'Bateswar'} />


            <List
                classlist={'space list'}
                litem1={'Dausa'}
                litem2={'Davanagere'}
                litem3={'Dehradun'}
                litem4={'Dehri'}
                litem5={'Delhi'}
                litem6={'Deoghar'}
                litem7={'Dewas'}
                litem8={'Dabok'} />


            <List
                classlist={'space list'}
                litem1={'Kadapa'}
                litem2={'Kadiri'}
                litem3={'Kaithal'}
                litem4={'Kakinanda'}
                litem5={'Kalaburagi'}
                litem6={'Kalady'}
                litem7={'Kamareddy'}
                litem8={'Kanpur'} />

        </div>
    )
}
export default fsec2