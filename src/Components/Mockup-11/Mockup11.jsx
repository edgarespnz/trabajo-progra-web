import React from "react";
import "./mockup11-stylesheet.css"
import Pc_Components from "./Pc_Components";

import Total from "./Total";


function Mockup_11() {
    return (
        <div className="container">
            <div className="title">
                <h1>Your Optimized Build !</h1>
            </div>

            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <button className="btnBack">Back</button>
                    <button className="btn btn-checkout">
                        <img className="cart-icon" src={require(`./images/icon-cart.png`)} alt="icon-cart" />
                        Checkout</button>
                </div>
            </div>

            <div className="row">
                <div className="builds">
                    <div className="imageColumn">
                        <img src={require(`./images/product-case2.png`)} alt="cpu-gamer" />
                    </div>
                    <div className="components">
                        <div className="title">
                            <h2>Components</h2>
                        </div>
                        <div>
                            <Pc_Components/>
                        </div>


                    </div>
                </div>
            </div>
            <Total
            price = "1899"
            buildFee = "99"/>

           
        </div>
    );
}

export default Mockup_11;