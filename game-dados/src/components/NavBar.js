import React from "react";
import logo from "../assets/logo2.png";

export default function NavBar() {
     return (
          <>
               <div>
                    <nav
                         className="navbar navbar-dark"
                         style={{backgroundColor: "#253343"}}
                    >
                         <div className="container-fluid ">
                              <img
                                   src={logo}
                                   alt=""
                                   width="184"
                                   height="61"
                                   className="d-inline-block align-text-top"
                              />
                              <div
                                   className="text-center"
                                   style={{
                                        color: "#f8b81f",
                                        textAlign: "center",
                                   }}
                              >
                                   <h1>Sistemas Tecnológicos Alcaraván</h1>
                              </div>
                         </div>
                    </nav>
               </div>
          </>
     );
}
