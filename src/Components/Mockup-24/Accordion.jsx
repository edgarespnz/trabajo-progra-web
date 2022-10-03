import React from "react";
import { useState } from "react";
import Content from "./Content";

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return selected(null);
        }
        setSelected(i);
    }
    
    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <img id= "accordion-item-image" src={require(`./images/product-case2.png`)} alt="img" />
                            <h2>{item.title}</h2>
                            <h2>${item.price}</h2>
                            <span>{selected === i ? 
                            <img id="dropdown-icon" src={require(`./images/icon-dropdown-close.png`)} alt="" /> 
                            : 
                            <img id="dropdown-icon" src={require(`./images/icon-dropdown-open.png`)} alt="" />}</span>
                        </div>
                        <div
                            className={
                                selected === i ? 'content show' : "content"
                            }
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: "Monster PC",
        content: 
        <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
        />,
        price: "1899"
    },

    {
        title: "Cruser Build",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1759"
        
    },

    {
        title: "Nasa PC",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1679"
    },
    {
        title: "Budget Build ",
        content : <Content
            image1 = "keyboard"
            title1 = "Keyboard & Mouse bundle"
            price1 = "39"
            
            image2 = "gpu2"
            title2 = "NVIDIA Geforce RTX 3070 8GB (VR READY)"
            price2 = "599"

            image3 = "ram"
            title3 = "16GB DDR4 Dual Channel"
            price3 = "79"
    />,
        price: "1299"
    }
]

export default Accordion;