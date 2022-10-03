import React from "react";

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Cart</a></li>
                <li class="breadcrumb-item"><a href="#">Information</a></li>
                <li class="breadcrumb-item"><a href="#">Shipping</a></li>
                <li class="breadcrumb-item active" aria-current="page">Payment</li>
            </ol>
            
        </nav>
    );
}

export default Breadcrumb;