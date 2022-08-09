import React from "react";

export default function Hero(props){
    const condiciones = ['Regla_1','Regla_2','Regla_3','Regla_4', 'Regla_5', 'Regla_6']

    return(
        <>
        <div className="hero">
         <div className="table">
            <h3>Reglas</h3>
            <div>
                <ul>
                {condiciones.map(item => (
                    <li key={item}>{item}</li>
                ))}
                </ul>
            </div>
         </div>
         <div className="table">
            <h3>Resultado</h3>
         </div>
         <div className="table">
            <h3>Dado</h3>
         </div>
        </div>
        </>
    );
}

