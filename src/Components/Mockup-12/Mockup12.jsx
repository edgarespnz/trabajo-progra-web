import React, { useState } from "react";
import Pc_Components from "../Mockup-11/Pc_Components";
import "./Mockup12-stylesheet.css"
import Total from "../Mockup-11/Total";
import Button from "../Mockup-4/Button";
import ButtonCardContent from "./ButtonCardContent";
import ButtonContent from "./ButtonContent";

function Mockup12() {

    const [active,setActive] = useState("");

    return (
        <div className="container">
            <div className="title">
                <h1>Build your own PC!</h1>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <button className="btnBack">Back</button>
                    <button className="btn btn-checkout">
                        <img className="cart-icon" src={require(`../Mockup-11/images/icon-cart.png`)} alt="icon-cart" />
                        Checkout</button>
                </div>
            </div>

            <div className="row">
                <div className="col-2" id="col-left">
                    <img src={require(`../Mockup-11/images/product-case2.png`)} alt="cpu-gamer" />
                    <Total
                        price="1899"
                        buildFee="99" />
                </div>
                <div className="col-5" id="col-middle">
                    <div class="row">
                        <div class="col" id="button" onClick={()=>setActive("Graphics")}><Button content="Graphics" /></div>
                        <div class="col" id="button" onClick={()=>setActive("Processor")}><Button content="Processor" /></div>
                        <div class="col" id="button"><Button content="Memory" /></div>
                        <div class="col" id="button"><Button content="Storage" /></div>
                    </div>
                    <div class="row" id="low-buttons">
                        <div class="col-4" id="button"><Button content="Cooler" /></div>
                        <div class="col-4" id="button"><Button content="Windows" /></div>
                        <div class="col-4" id="button"><Button content="Power Supply" /></div>
                    </div>

                {active === "Graphics" && <ButtonCardContent
                itemImage1 = "gpu2"
                itemName1 = "NVIDIA GeForce GTX 1650 4GB"
                itemPrice1="329"

                itemImage2 = "gpu2"
                itemName2 ="NVIDIA GeForce RTX 3050 8GB (VR ready)"
                itemPrice2 ="124"


                itemImage3 = "gpu2"
                itemName3 ="NVIDIA GeForce RTX 3060 12gb (VR ready)"
                itemPrice3 ="240"

                itemImage4 = "gpu2"
                itemName4 = "NVIDIA GeForce RTX 3090 TI 24GB (VR ready)"
                itemPrice4 = "1558"
                />}


                {active === "Processor" && <ButtonCardContent
                itemImage1 ="procesador"
                itemName1 = "Intel Core i3-12100F 4-Core"
                itemPrice1="329"


                itemImage2 ="procesador"
                itemName2 ="Intel Core i7 - 12700F 12-Core"
                itemPrice2 ="180"

                itemImage3= "procesador"
                itemName3 ="Intel Core i5 - 12400F 6-Core"
                itemPrice3 ="240"

                itemImage4 = "ryzen"
                itemName4 = "AMD Ryzen 5 - 5600X 6-Core"
                itemPrice4 = "1558"
                />}

                {active === "ThirdCard"}

                </div>
                <div className="col-4" id="col-right">
                    <Pc_Components />
                </div>
            </div>
        </div>
    );
}

export default Mockup12;