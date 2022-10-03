import React from "react";

function ExpressCheckout(){
    return (
        <div className="paymentMethods">
            <button type="button" class="btn btn-primary btn-lg">ShopPay</button>
            <button type="button" class="btn btn-primary btn-lg">Paypal</button>
            <button type="button" class="btn btn-primary btn-lg">Google Pay</button>
        </div>
        
    );
}

export default ExpressCheckout;