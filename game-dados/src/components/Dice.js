import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dice(props){
   const [dot, setDot] = useState('one')
   const [rolling, setRolling] = useState(false)
   
    function handlerRandom () {
        
          setRolling(true)
          console.log(rolling)
          
        return props.dots[Math.floor(Math.random()*props.dots.length)]

    } 
    setTimeout(() => {
      
            
        setRolling(false)
        
      },1000)

    const handlerBtn = rolling ? 'RollDice-rolling' : ''; 
       
    return(
        <>
        <div className='RollDice'>
            <div className='RollDice-container'>
            <FontAwesomeIcon icon={['fas', `fa-dice-${dot}`]}  className={`Die 
                    ${rolling && 'Die-shaking'}`} />
        </div>
        <div className='contentBtn '>   
        <button className={handlerBtn}
               onClick={()=> {
                setDot(handlerRandom())
            }} 
            disabled={rolling}>{rolling ? 'En espera' : 'Lanzar dados'}</button>
            <button className='margin'>Reiniciar</button>
            </div>
        </div>
        </>
    );

}

Dice.defaultProps = {
    dots : ['one', 'two', 'three', 
    'four', 'five', 'six']
}