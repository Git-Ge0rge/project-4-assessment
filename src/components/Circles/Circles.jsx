import React from 'react';
import './Circles.css'

const Circles = (props) => {
    return(
        <div className="Circles">
            <div className={props.isC1Active ? 'selected' : 'unselected'}> 1 </div>
            <div className={props.isC2Active ? 'selected' : 'unselected'}> 2 </div>
            <div className={props.isC3Active ? 'selected' : 'unselected'}> 3 </div>
            <div className={props.isC4Active ? 'selected' : 'unselected'}> 4 </div>
        </div>
    )

}

export default Circles