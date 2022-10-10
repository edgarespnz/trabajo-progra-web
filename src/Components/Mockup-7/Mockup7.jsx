import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mockup7-stylesheet.css";


function Mockup7() {

    

    return (
        <div className="contenedor">
            <div className="container" style={{ margintop: "10%", padding: "50px" }} >

                <div className="row mb-4" >

                    <div className="col" style={{ width: "1000px", height: "350px" }} >

                        <div className="bg-light p-2 text-dark bg-opacity-10" style={{ width: "60%" }}>

                            <div style={{ marginLeft: "10%", width: "50%" }}>
                                <img width={500} height={500} src={"https://sybergaming.com/wp-content/uploads/2018/11/rtx-logo.jpg"} alt="CPU" />
                            </div>



                            <button id="button" style={{ marginLeft: "25%",marginTop: "25%", width: "50%" }} type="button" className="both3 btn btn-danger border-0" >Agrega al carrito</button>
                        </div>
                    </div>




                    <div className="col" >

                        <div className="bg-primary p-2 text-dark bg-opacity-25">

                            <h1>NVIDIA GEFORCE <br />GTX 1650 4 GB</h1>
                            <h2><b>$229</b></h2>

                            <h3><span style={{ color: "#d1c4e9" }}>Shipping</span> calculated at checkout.</h3>

                            <table style={{ margintop: "20px" }}>

                                <tr>
                                    <th><b>CHIPSET <br /> MANUFACTURER </b> </th><th>NVIDIA</th></tr>
                                <tr>
                                    <td><b>GPU</b></td><td>GeForce GTX 1650</td></tr>
                                <tr>
                                    <td><b>CORE CLOCK</b>   </td><td>1530 MHz</td></tr>
                                <tr>
                                    <td><b>BOOST CLOCK</b>    </td><td>OC Mode: 1800 MHz <br /> Gaming Mode <br /> (Default): 1770 MHz</td></tr>
                                <tr>
                                    <td><b>CUDA CORES</b>    </td><td>1280</td></tr>

                            </table>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Mockup7;