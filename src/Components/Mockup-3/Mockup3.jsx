import React from "react";
import "./mockup3-stylesheet.css";
import Footer from "../Footer/Footer";

function Mockup_3(props) {
    return(
        //contenido de la página principal

    <div className="container-mockup-3">
    <div className = "container-title"> <h1> Build your PC! </h1></div>
    <div className = "container-subtitle"><h2>Just for what you need</h2></div>
    <button type="button" class="btn btn-outline-primary">Build for Begginers</button>
    <button type="button" class="btn btn-outline-primary">Advanced Building</button>
    <Footer />
    </div>
    );

}

export default Mockup_3;