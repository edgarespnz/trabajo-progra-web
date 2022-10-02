import React from "react";

function Cart_items(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col image">
                    <img className="img-product" src={require(`./images/product-${props.image_name}.png`)} alt="imagen-de-producto" />
                </div>
                <div className="col title">
                    <h3>{props.item_name}</h3>
                </div>
                <div className="col price">
                    <h3>{props.item_price}</h3>
                </div>
                <div className="col trash">
                    <a href=""><img className="img-trashcan" src={require(`./images/icon-trashcan.png`)} alt="trashcan-img" /></a>
                </div>
            </div>

        </div>
    );
}

export default Cart_items;