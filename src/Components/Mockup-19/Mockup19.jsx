import React from "react";
import "./Mockup19-stylesheet.css";

function Mockup_19(){
    return(
        <div className="Container">
            <h1>Submit a request</h1>
            <div className="Formulario">
                <div className="SolicitudEmail">
                    <label>Email</label>
                    <input type="text" name="requestEmail"></input>
                </div>
                <div className="SolicitudNombre">
                    <label>Name</label>
                    <input type="text" name="requestName"></input>
                </div>
                <div className="SolicitudCelular">
                    <label>Phone</label>
                    <input type="text" name="requestPhone"></input>
                </div>
                <div className="SolicitudDescripcion">
                    <label>Description</label>
                    <textarea className="requestDescription"></textarea>
                </div>
                <button id="buttonM19" onClick={()=>{
                    alert('clicked');

                }}>Submit</button>
            </div>
        </div>
    );

}

export default Mockup_19;