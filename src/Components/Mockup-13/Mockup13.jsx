import React from "react";
import "./Mockup13-stylesheet.css"
import Breadcrumb from "./Breadcrumb";
import ExpressCheckout from "./ExpressCheckout";
import Divider from "./Divider";
import ContactInformation from "./ContactInformation";
import Checkbox from "./Checkbox";
import Forms from "./Forms";
import Item from "./Item";
import { Form } from "react-router-dom";

function Mockup13() {
    return (
        <div className="container">
            <div class="row">
                <div class="col" id="colLeft">

                    <Breadcrumb />
                    <Divider text="Express Checkout" />
                    <ExpressCheckout />
                    <div className="divider">
                        <Divider text="Or" />
                    </div>
                    <ContactInformation />
                    <Checkbox text="Email me with news and offers" />

                    <div className="shipping-forms">
                        <h2 className="shipping-title">Shipping Adress</h2>
                        <Forms />
                    </div>


                </div>
                <div class="col" id="colRight">
                    <Item
                        image="build-service"
                        name="Build + setup + testing + warranty"
                        price="99" />

                    <Item
                        image="powersupply"
                        name="700W ATX 80 Plus Gold"
                        price="79" />

                    <Item
                        image="cm"
                        name="CM MasterLiquid ML 240L"
                        price="89" />

                    <Item
                        image="windows"
                        name="Windows 11 Home + USB recovery"
                        price="120" />

                    <Item
                        image="antena"
                        name="Wireless 802.11ac"
                        price="29" />

                    <Item
                        image="ram"
                        name="16GB DDR4 Dual Channel"
                        price="69" />

                    <Item
                        image="motherboard"
                        name="Asus Prime B660M-A"
                        price="149" />


                </div>

            </div>


        </div>
    );
}

export default Mockup13;