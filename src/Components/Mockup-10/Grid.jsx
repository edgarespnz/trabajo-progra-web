import React from "react";
import "./Mockup10-stylesheet.css";

function Grid(props){
    return(
        <span className="imagenes">
            <button onClick={() => {
                alert('clicked');
            }}>
                <img src={require(`./Images/icon-${props.image}.png`)} alt="icon-image" />
            </button>

        </span>
    );

}

export default Grid;

