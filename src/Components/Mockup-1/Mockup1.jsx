import React from "react";
import "./Mockup1-stylesheet.css";
import { useNavigate } from "react-router-dom"

function Mockup1(){



    return (
        <div className="main-container-mockup-1">
            <div className="container-mockup-1">
                <div className="container" id = "contenedorLogin"/>
                    <h2>
                        REGISTER
                    </h2>
                    
 
                    <div className="form-group">
                        <label for="Name"></label>
                            <input type="name" className="form-control" id="firstName"  placeholder="First Name"/>
                            
            
                    </div>
                    <div className="form-group">
                        <label for="NameSec"></label>
                            <input type="name" className="form-control" id="lastName"  placeholder="Last Name"/>
                            
            
                    </div>
                    <div className="form-group">
                        <label for="correo"></label>
                            <input type="name" className="form-control" id="email"  placeholder="Email"/>
                            
            
                    </div>
                    <div className="form-group">
                        <label for="pass"></label>
                            <input type="name" className="form-control" id="passw"  placeholder="Password"/>
            
          
                    </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block">CREATE</button>



            </div>
        </div>
    
    );
}
export default Mockup1;