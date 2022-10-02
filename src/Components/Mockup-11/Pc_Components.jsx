import React from "react";
import Table from "./Table";

function Pc_Components(){
    return(
        <div className="pc-components">
                            <Table
                                image="procesador"
                                name="INTEL CORE I7-12700F 12-CORE "
                                price="359"
                            />

                            <Table
                                image="ram"
                                name="16 GB DDR4 DUAL CHANNEL "
                                price="359"
                            />

                            <Table
                                image="procesador"
                                name="CM MASTERLIQUID ML240L"
                                price="359"
                            />

                            <Table
                                image="cm"
                                name="COOLER MASTER TD500"
                                price="359"
                            />

                            <Table
                                image="motherboard"
                                name=" ASUS PRIME B660M - A INTEL"
                                price="359"
                            />

                            <Table
                                image="windows"
                                name="WINDOWS 11 HOME + USB RECOVERY "
                                price="359"
                            />

                            <Table
                                image="gpu2"
                                name="NVIDIA GEFORCE RTX 3070 8GB(VR READY)"
                                price="359"
                            />

                            <Table
                                image="build-service"
                                name="BUILD+SETUP+TESTING+WARRANTY "
                                price="359"
                            />
                        </div>
    );
}
export default Pc_Components;