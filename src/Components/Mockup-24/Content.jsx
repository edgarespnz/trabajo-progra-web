import React from "react";

function Content(props){
    return(
        <div className="contentAccordion">
            <div className="row" id="accordion-item-content">
            <div className="col" id="colContent">
                <img src={require(`./images/product-${props.image1}.png`)}  alt="image" />
            </div>
            <div className="col" id="colContent">
                {props.title1}
            </div>
            <div className="col" id="colContent">
                ${props.price1}
            </div>
        </div>

        <div className="row" id="accordion-item-content">
            <div className="col" id="colContent">
                <img src={require(`./images/product-${props.image2}.png`)}  alt="image" />
            </div>
            <div className="col" id="colContent">
                {props.title2}
            </div>
            <div className="col" id="colContent">
                ${props.price2}
            </div>
        </div>

        <div className="row" id="accordion-item-content">
            <div className="col" id="colContent">
                <img src={require(`./images/product-${props.image3}.png`)}  alt="image" />
            </div>
            <div className="col" id="colContent">
                {props.title3}
            </div>
            <div className="col" id="colContent">
                ${props.price3}
            </div>
        </div>
        </div>
        
    );
}

export default Content