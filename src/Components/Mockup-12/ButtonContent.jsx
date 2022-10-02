import React from "react";

function ButtonContent(props) {
    return (
        <div class="container">
            <div class="row" id="buttonContentItems">
                <div class="col">
                    <img className="buttonImage" src={require(`../Mockup-11/images/product-${props.itemImage}.png`)} alt="product-img" />
                    
                    <div className="row" id="middleRow">
                        <strong><h3>{props.itemName}</h3></strong>
                        <p>${props.itemPrice}</p>

                    </div>
                </div>
                <div class="col-md-auto" id="buttonContent">
                </div>

            </div>
        </div>
    );
}

export default ButtonContent;