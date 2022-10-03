import React from "react";

function Forms() {
    return (

        <form>
            <div className="form-group">
                <label for="label">Country/Region</label>
                <select className="form-control" id="label" >
                    <option>United States</option>
                    <option>Peru</option>
                </select>


                <div className="form-group">
                    <label for="label">Saved adress</label>
                    <select className="form-control" id="label" >
                        <option>United States</option>
                        <option>Peru</option>
                    </select>
                </div>

                <div className="form-group">
                    <div className="form-row-names">
                        <div className="col-name">
                            <label for="label">First Name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col-lastName">
                            <label for="label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label for="label">Company Name</label>
                    <input type="text" id="label" className="form-control" placeholder="Company (optional)" />
                    <label for="label">Address</label>
                    <input type="text" id="label" className="form-control" placeholder="Address" />
                    <label for="label">Apartment</label>
                    <input type="text" id="label" className="form-control" placeholder="Apartment,suite,etc.(optional)" />
                </div>

                <div class="form-row" id="cityStateZip">
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault03">City</label>
                        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault04">State</label>
                        <select className="form-control" id="label" >
                            <option>State</option>
                            <option>State1</option>
                            <option>State2</option>
                        </select>

                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault05">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required />
                    </div>
                </div>
                <input type="text" id="label" className="form-control" placeholder="Phone" />
            </div>
        </form>


    );
}

export default Forms;
