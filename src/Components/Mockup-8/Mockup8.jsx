import React from "react";
import './Mockup8-stylesheet.css'
import Cart_items from "./Cart_items";

function Cart() {
    return (
        <div className="container main">

            <div className="container content-1">
                <h2 className="shooping-title">  Shopping car items</h2>
                <button className="btn btn-checkout">
                    <img className="cart-icon" src={require(`./images/icon-cart.png`)} alt="icon-cart" />
                    Checkout</button>
            </div>

            <div className="container main-items">
            <div className="container cart-items">
                
                <Cart_items
                    image_name="keyboard"
                    item_name="Keyboard & Mouse Bundle"
                    item_price="$99"
                />

            </div>

            <div className="container cart-items">
                
                <Cart_items
                    image_name="procesador"
                    item_name="INTEL CORE I7 -12700F 12-CORE"
                    item_price="$359"
                />

            </div>

            <div className="container cart-items">
                <Cart_items
                    image_name="gpu"
                    item_name="NVIDIA GEFORCE RTX 3070 8GB (VR READY)"
                    item_price="$679"
                />
            </div>

            <div className="container cart-items">
                <Cart_items
                    image_name="ram"
                    item_name="1TB NVME M.2"
                    item_price="$99"
                />
            </div>

            <div className="container cart-items">
                <Cart_items
                    image_name="case"
                    item_name="COOLER MASTER TD500 RGB"
                    item_price="$99"
                />
            </div>


            </div>
        </div>


    );
}
export default Cart;