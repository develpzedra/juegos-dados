import React, {useState, useEffect} from "react";

export default function Give() {
     const faces = 6;
     const maxRollTimes = 10;

     const [intrvl, setIntrvl] = useState();
     const [diceFace, setDiceFace] = useState(1);
     const [btnDisabled, setBtnDisabled] = useState(false);
     const [rollTimes, setRollTimes] = useState();
     /*      useEffect(() => {
          if (rollTimes === 0) {
               clearInterval(intrvl);
               setBtnDisabled(false);
          }
     }); */
     useEffect(() => {
          if (rollTimes === 0) {
               clearInterval(intrvl);
               setBtnDisabled(false);
          }
     }, []);

     function rollDice() {
          setBtnDisabled(true);
          clearInterval(intrvl);
          let counter = Math.floor(Math.random() * maxRollTimes + 1);
          setRollTimes(counter);
          const interval = setInterval(() => {
               setDiceFace(Math.floor(Math.random() * faces) + 1);
               counter--;
               setRollTimes(counter);
          }, 200);
          setIntrvl(interval);
     }

     const dice = (
          <div className="dice-container">
               <div className={`dice face-${diceFace}`}>
                    <div className="face-1">
                         <div className="dot-container">
                              <div className="dot"></div>
                         </div>
                    </div>
                    <div className="face-3">
                         <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                         </div>
                    </div>
                    <div className="face-4">
                         <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                         </div>
                    </div>
                    <div className="face-2">
                         <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                         </div>
                    </div>
                    <div className="face-5">
                         <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                         </div>
                    </div>
                    <div className="face-6">
                         <div className="dot-container">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                         </div>
                    </div>
               </div>
          </div>
     );

     const rollButton = (
          <button className="dan-btn dan-btn--default" onClick={rollDice}>
               {btnDisabled}
               Roll Dice
          </button>
     );

     return (
          <div className="main-container">
               <h1>Roll the dice with React Hooks</h1>
               <div className="main-dice-container">{dice}</div>
               <div className="button-container">{rollButton}</div>
          </div>
     );
}
