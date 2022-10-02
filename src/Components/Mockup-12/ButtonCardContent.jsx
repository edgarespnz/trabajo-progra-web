import React from "react";
import ButtonContent from "./ButtonContent";

function ButtonCardContent(props) {
    return (
        <div className="card">
            <ButtonContent
                itemImage={props.itemImage1}
                itemName={props.itemName1}
                itemPrice={props.itemPrice1} />

            <ButtonContent
                itemImage={props.itemImage2}
                itemName={props.itemName2}
                itemPrice={props.itemPrice2} />

            <ButtonContent
                itemImage={props.itemImage3}
                itemName={props.itemName3}
                itemPrice={props.priceItem3} />

            <ButtonContent
                itemImage={props.itemImage4}
                itemName={props.itemName4}
                itemPrice={props.itemPrice4} />
        </div>
    );
}

export default ButtonCardContent;