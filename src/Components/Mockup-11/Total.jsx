import React from "react";

function Total(props){
    return(
        <div className="row" id="total-price">
                <div className="col">
                    <div className="components-price">
                        <h3> Components price</h3>
                        <h2> $ {props.price}</h2>
                    </div>
                </div>
                <div className="col">
                    <div className="col">
                        <div className="build-fee">
                        <h3> Build fee</h3>
                        <h2> $ {props.buildFee}</h2>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Total;