import React, {useState} from "react";
import Give from "./Give";

export default function Hero(props) {
     const [count, setCount] = useState(0);
     const condiciones = [
          "Pinta Carita",
          "Simule el sonido de un animal",
          "Salte 5 veces",
          "Lance el dado nuevamente",
          "Foto de grupo",
          "Premio sorpresa",
     ];

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
                    <div className="table">
                         <h3>Resultado</h3>
                    </div>
                    <div className="table">
                         {/*  <img
                              className="rounded"
                              src={dado}
                              alt=""
                              width="180px"
                              height="180px"
                         /> */}
                         <Give />
                         <h3>{count}</h3>
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
          </>
     );
}
