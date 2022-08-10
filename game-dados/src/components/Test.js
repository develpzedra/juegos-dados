import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Test(props){
   const [dot, setDot] = useState('')
   const [rolling, setRolling] = useState(false)
   
    function handler () {
        return props.dots[Math.floor(Math.random()*props.dots.length)]
    } 
    
       
    return(
        <>
        <div>
        <FontAwesomeIcon icon={['fas', `fa-dice-${dot}`]} className= {`Die Die${rolling && 'Die-shaking'}`} />
            <button onClick={()=> {
                setDot(handler())
            }}></button>
        </div>
        </>
    );

}

Test.defaultProps = {
    dots : ['one', 'two', 'three', 
    'four', 'five', 'six']
}