import React from "react";

function HistoryListItem(props) {
    return (
        <div className="row-1" id="HistoryContent">
            <div className="col-2" >
                <img src={require(`./images/product-${props.image}.png`)}  alt="image" />
            </div>
            <div className="col-4">
                {props.title}
            </div>
            <div className="col2" id="pricing">
                ${props.price}
            </div>
            <div className="col-3">
                {props.date}
            </div>
        </div>
    );
}

export default HistoryListItem;