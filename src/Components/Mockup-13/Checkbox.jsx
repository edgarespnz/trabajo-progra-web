import React from "react";

function Checkbox(props) {
    return (

        <div className="checkbox">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    {props.text}
                </label>
        </div>
        </div>
    );
}

export default Checkbox;