import React, {useState} from "react";
import penitencias from "../assets/dado";
import "./RollDice";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(fas);

export default function Hero(props) {
     const [count, setCount] = useState(0);
     const [play, setPlay] = useState(true);
     const [dot, setDot] = useState("one");
     const [rolling, setRolling] = useState(false);
     const lados = ["cero", "one", "two", "three", "four", "five", "six"];
     function getRandomIntInclusive(min, max) {
          let lista = document.querySelectorAll("li");
          lista.forEach((el) => {
               el.classList.remove("colorBg");
          });
          min = Math.ceil(min);
          max = Math.floor(max);
          let valorNum = Math.floor(Math.random() * (max - min + 1) + min);
          setDot(lados[valorNum]);
          setRolling(true);
          let selection = document.getElementById(valorNum);
          selection.classList.add("colorBg");

          return valorNum;
     }
     function Clean() {
          let lista = document.querySelectorAll("li");
          lista.forEach((el) => {
               el.classList.remove("colorBg");
          });
     }

     setTimeout(() => {
          setRolling(false);
     }, 2000);

     const handlerBtn = rolling ? "color-btn-rolling" : "color-btn";

     if (play) {
          return (
               <>
                    <div className="homeContent">
                         <div className="flexContent">
                              <button
                                   className="centerBtn"
                                   onClick={() => setPlay(false)}
                              >
                                   Juguemos
                              </button>
                         </div>
                    </div>
               </>
          );
     } else {
          return (
               <>
                    <div className="contentHero">
                         <div className="hero">
                              <div className="table-item">
                                   <h3 className="text-center">Retos</h3>
                                   <div>
                                        <ol>
                                             <li className="margin-btn " id="1">
                                                  Paso de baile
                                             </li>
                                             <li className="margin-btn " id="2">
                                                  Simula el sonido de un animal
                                             </li>
                                             <li className="margin-btn" id="3">
                                                  Salta 5 veces
                                             </li>
                                             <li className="margin-btn" id="4">
                                                  Lanza el dado nuevamente
                                             </li>
                                             <li className="margin-btn" id="5">
                                                  Foto de grupo
                                             </li>
                                             <li className="margin-btn" id="6">
                                                  Premio sorpresa
                                             </li>
                                        </ol>
                                   </div>
                              </div>

                              <div className="table-item">
                                   <h3 className="text-center">Resultado</h3>
                                   <img
                                        className="rounded mx-auto d-block"
                                        src={penitencias[count]}
                                        alt=""
                                        width="240px"
                                        height="240px"
                                   />
                              </div>

                              <div className="table-item">
                                   <h3 className="text-center">Dado</h3>
                                   <div className="RollDice">
                                        <div className="RollDice-container">
                                             <FontAwesomeIcon
                                                  icon={[
                                                       "fas",
                                                       `fa-dice-${dot}`,
                                                  ]}
                                                  className={`Die 
                              ${rolling && "Die-shaking"}`}
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="contentBtn">
                              <button
                                   className={handlerBtn}
                                   onClick={() => {
                                        setCount(getRandomIntInclusive(1, 6));
                                   }}
                                   disabled={rolling}
                              >
                                   {rolling ? "En espera" : "Lanzar dado"}
                              </button>

                              <button
                                   onClick={() => {
                                        setCount(0);
                                        Clean();
                                   }}
                                   className="color-btn margin"
                              >
                                   Reiniciar
                              </button>
                         </div>
                    </div>
               </>
          );
     }
}
