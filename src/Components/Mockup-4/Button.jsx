import React from "react";

function Button(props){
    return (
        <div className="order" type= "button">
                    <h2>{props.content}</h2>
        </div>
    );
}

export default Button;