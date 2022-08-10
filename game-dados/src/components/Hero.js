import React, {useState} from "react";
import penitencias from "../assets/dado";

import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)



export default function Hero(props) {
     const [count, setCount] = useState(0);
/*      const [speed, setSpeed] = useState(['one', 'two', 'three', 
     'four', 'five', 'six'])

     const  handler = () => {
          return(
               speed[Math.floor(Math.random()*speed.length)]
          );
     } */

     function getRandomIntInclusive(min, max) {
          let lista = document.querySelectorAll("li");
          lista.forEach((el) => {
               el.classList.remove(
                    "text-success",
                    "border-bottom",
                    "border-success",
                    "text-dark"
               );
          });
          min = Math.ceil(min);
          max = Math.floor(max);
          let valorNum = Math.floor(Math.random() * (max - min + 1) + min);
          let selection = document.getElementById(valorNum);
          selection.classList.add(
               "text-success",
               "border-bottom",
               "border-success"
          );
               
          return valorNum;
     }
     function Clean() {
          let lista = document.querySelectorAll("li");
          lista.forEach((el) => {
               el.classList.remove(
                    "text-success",
                    "border-bottom",
                    "border-success",
                    "text-dark"
               );
          });
     }

     return (
          <>
               <div className="contentHero">
                   <div className="hero">
                         <div className="table">
                                   <h3 className="text-center">Penitencias</h3>
                                   <div>
                                        <ol>
                                             <li id="1">Pinta Carita</li>
                                             <li id="2">Simule el sonido de un animal</li>
                                             <li id="3">Salte 5 veces</li>
                                             <li id="4">Lance el dado nuevamente</li>
                                             <li id="5">Foto de grupo</li>
                                             <li id="6">Premio sorpresa</li>
                                        </ol>
                                   </div>
                         </div>
                         <div className="table mx-auto d-block">
                              <h3 className="text-center">Resultado</h3>
                              <img
                                   className="rounded mx-auto d-block"
                                   src={penitencias[count]}
                                   alt=""
                                   width="240px"
                                   height="240px"
                              />
                         </div>
                         <div className="table">
                         <RollDice   />
                         </div>
                         <div>
                              <button
                                   onClick={() =>
                                        setCount(getRandomIntInclusive(1, 6))
                                       
                                   }
                                   className="btn btn-primary align-items-center"
                              >
                                   Komui
                              </button>
                              <button
                                   onClick={() => {
                                        setCount(0);
                                        Clean();
                                   }}
                                   className="btn btn-primary align-items-center"
                              >
                                   Reiniciar
                              </button>
                         </div>
                   </div>
               </div>
          </>
     );
}
