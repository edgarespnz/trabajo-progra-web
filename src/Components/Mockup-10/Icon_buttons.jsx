import React from "react";
import Grid from "./Grid.jsx";

function Icon_buttons(){
    return(
        
        <div class="icon_buttons">

            <div class="posEsp">
                <Grid image="gaming" />
                <Grid image="design" />
                <Grid image="coding" />
            </div>

            <div class="posEsp">
                <Grid image="rendering" />
                <Grid image="office" />
                <Grid image="other" />
            </div>

        </div>

    );
    
}

export default Icon_buttons;