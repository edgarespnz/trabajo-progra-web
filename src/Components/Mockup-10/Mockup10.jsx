import React from "react";
import "./Mockup10-stylesheet.css";
import Icons_buttons from "./Icon_buttons.jsx";

function Mockup_10() {
    return (

        <div className="container1">

        
            <div className="Header">
                    <span>What do you need?</span>
                    <button className="btnNext">Next</button>
                    <button className="btnBack">Back</button>    
            </div>
        
            <div class="row" id="rowM10">
                <div className="container" id="containerM10">
                    
                        <Icons_buttons/>

                </div>
            </div>

        </div>
    );
    
    

}

export default Mockup_10;