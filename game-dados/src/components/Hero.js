import React, {useState} from "react";
import Give from "./Give";
import penitencias from "../assets/dado";

/* import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'

import Dice from 'react-dice-roll'; */

export default function Hero(props) {
     const [count, setCount] = useState(0);

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
               <div className="hero">
                   

                    <div className="table">
                         <h3>Penitencias</h3>
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
                         <div className="contentDice">
                              <Give />
                       {/*   <ReactDice 
                         disableIndividual={true} 
                         numDice={1} 
                         outline={true} 
                         outlineColor='#BFC9CA' 
                         faceColor='#EAECEE' 
                         dotColor='#151313' 
                         dieSize={100}
                         rollTime={1} 
                         />    */}
                        {/*  <Dice size={100} onRoll={(value) => setCount(value)} /> */}
                         </div>                        
                    </div>

                   

                    <div>
                         <button
                              onClick={() =>
                                   setCount(getRandomIntInclusive(1, 6))
                              }
                              className="btn btn-primary align-items-center"
                         >
                              Lanzar Dado
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
          </>
     );
}
