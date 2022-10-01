import React from "react";
import "./Mockup4-stylesheet.css";
import Button from "./Button";


function Mockup4(props) {
    return (
        <div className="container">
            <div className="row">
            <div className="col-4" id="buttons">
                <div className="button1">
                <Button content = "Order History"/>

                </div>

                <div className="button2">
                <Button content = "Profile Info"/>
                </div>

                <div className="button3">
                <Button content = "Log Out"/>
                </div>
                
                
            </div>
            <div className="col-6" id="sideContent">
                <div className="form">
                    Aquí va el contenido del formulario
                </div>
            </div>
        </div>

        

        </div>
        
    );
}

export default Mockup4;