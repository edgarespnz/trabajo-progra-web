import React from "react";

function Item(props) {
    return (
        <div className="items">
            <div className="row">
                <div className="components-summary">
                    <div className="image">
                        <img src={require(`./images/product-${props.image}.png`)} alt="component-img" />
                    </div>
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="price">
                        ${props.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;