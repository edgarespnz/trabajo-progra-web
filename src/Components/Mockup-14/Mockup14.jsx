import React from "react";
import Button from "../Mockup-4/Button";
import HistoryListItem from "./HistoryListItem";

import "./Mockup14-stylesheet.css";

function Mockup14() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" id="buttons">
                    <Button
                        content="Order History" />
                    <Button
                        content="Profile Info" />
                    <Button
                        content="Log Out" />

                </div>
                <div className="col-5" id="content-right">

                   <div className="firstItem" id="item-component-mockup14">
                   <HistoryListItem
                   image = "keyboard"
                   title = "Keyboard and Mouse Bundle"
                   price = "39"
                   date = "10/12/2022"/>
                   </div>

                   <div className="firstItem" id="item-component-mockup14">
                   <HistoryListItem
                   image = "case2"
                   title = "Cooler Master TD 500 RGB"
                   price = "99"
                   date = "10/12/2022"/>
                   </div>

                   <div className="firstItem" id="item-component-mockup14">
                   <HistoryListItem
                   image = "ssd"
                   title = "1TB NVME M.2"
                   price = "99"
                   date = "10/12/2022"/>
                   </div>

                   <div className="firstItem" id="item-component-mockup14">
                   <HistoryListItem
                   image = "gpu2"
                   title = "NVIDIA GEFORCE RTX 3070 8GB (VR READY)"
                   price = "679"
                   date = "10/12/2022"/>
                   </div>

                   <div className="firstItem" id="item-component-mockup14">
                   <HistoryListItem
                   image = "build-service"
                   title = "BUILD + SETUP + TESTING + WARRANTY"
                   price = "99"
                   date = "10/12/2022"/>
                   </div>

                </div>
            </div>
        </div>
    );
}

export default Mockup14;