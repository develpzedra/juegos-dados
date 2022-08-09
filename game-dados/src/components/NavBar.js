import React from "react";
import logo from "../assets/logo.jpg";

export default function NavBar() {
     return (
          <>
               <div>
                    <nav className="navbar navbar-dark bg-dark">
                         <div className="container-fluid align-items-center ">
                              <img
                                   src={logo}
                                   alt=""
                                   width="65"
                                   height="45"
                                   className="d-inline-block align-text-top"
                              />
                              <h3 className="card-title text-white ">
                                   Sistemas Tecnológico Alcaraván
                              </h3>
                         </div>
                    </nav>
               </div>
          </>
     );
}
