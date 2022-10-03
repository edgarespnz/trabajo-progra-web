import React from "react";
import "./Mockup5-stylesheet.css";
import Button from "./Button1";


function Mockup5(props) {
    


    return (
        <div className="container">
            <div className="row">
            <div className="col-4" id="buttons">
                <div className="button1">
                <Button content = "Order History"/>

                </div>

                <div className="button2">
                <Button content = "Profile Info"/>
                </div>

                <div className="button3">
                <Button content = "Log Out"/>
                </div>
                
                
            </div>
            <div className="col-6 text-white">
                    <form className="row g-3 rounded-1 bg-white">
                        <div className="col-md-6">
                            <label className="form-label text-black">First Name</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label ">Last Name</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-12">
                            <label className="form-label text-black">Email</label>
                            <input type="email" className="form-control"></input>
                        </div>

                        <div className="col-12">
                            <label className="form-label text-black">Address</label>
                            <input type="email" className="form-control"></input>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-black">Aparmament, suit, etc</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">Country/Region</label>
                            <select className="form-select">
                                <option selected>United States</option>
                                <option selected>Peru</option>
                                <option selected>Mexico</option>
                                <option selected>Canada</option>
                            </select>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">Postal/zip code</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-12 text-black">
                            <label className="form-label">Phone</label>
                            <input type="tel" className="form-control"></input>
                        </div>

                        <div className="col-md-4 text-black">
                            <button type="submit" class="btn btn-primary" id="buttonupdate">Update Info</button>
                        </div>

                        <div className="col-md-4">
                            <button type="button" className="btn btn-light btn-sm" id="buttoncancel">Cancel</button>
                        </div>

                    </form>
                </div>
        </div>

        

        </div>
        
    );
}

export default Mockup5;