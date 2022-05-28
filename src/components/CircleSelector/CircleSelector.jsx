import React from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => {

    const handleC1Toggle = () => {
      props.setC1(!props.isC1Active);  
    };
    
    const handleC2Toggle = () => {
        props.setC2(!props.isC2Active);  
    };

    const handleC3Toggle = () => {
        props.setC3(!props.isC3Active);  
    };

    const handleC4Toggle = () => {
        props.setC4(!props.isC4Active);  
    };
  
    return(
        <div className='CircleSelector'>      

            <button onClick={handleC1Toggle} className={props.isC1Active ? 'selected' : 'unselected'} >
                {props.isC1Active ? 'Circle 1 Selected' : 'Select Circle 1'} 
            </button> 

            <button onClick={handleC2Toggle} className={props.isC2Active ? 'selected' : 'unselected'} >
                {props.isC2Active ? 'Circle 2 Selected' : 'Select Circle 2'} 
            </button>

            <button onClick={handleC3Toggle} className={props.isC3Active ? 'selected' : 'unselected'} >
                {props.isC3Active ? 'Circle 3 Selected' : 'Select Circle 3'} 
            </button> 

            <button onClick={handleC4Toggle} className={props.isC4Active ? 'selected' : 'unselected'} >
                {props.isC4Active ? 'Circle 4 Selected' : 'Select Circle 4'} 
            </button>  

        </div>
    )
}

export default CircleSelector