import React from "react";
import "../Stylesheets/Mockup20-stylesheet.css"

function Mockup_20(){
    return(
        <div className="Container" id="ContainerM20">
            <h1 id="H1M20">User Reviews</h1>
            
            <div className="score">
                <span id="spanM20">Global rate</span>
                <span className="puntaje">4.5</span>
                <img id="imgM20" src={require(`./Images/fullP.png`)} alt="estrella"/>
                <img id="imgM20" src={require(`./Images/fullP.png`)} alt="estrella"/>
                <img id="imgM20" src={require(`./Images/fullP.png`)} alt="estrella"/>
                <img id="imgM20" src={require(`./Images/halfP.png`)} alt="estrella"/>
                <img id="imgM20" className="auxStar" src={require(`./Images/zeroP.png`)} alt="estrella"/>
            </div>
            <hr size="2px" color="gray" width="98%"></hr>


            <header className="usuario" id="UsuarioM20">
                <img className="user1" src={require(`./Images/usuario1.png`)} alt="usuario1"/>
                <span className="Username" id="UsernameM20">Emilio Berrocal</span>
            </header>
            <div className="comentario">Una PC bien construida con un case de alta calidad.</div>

            <hr size="2px" color="gray" width="98%"></hr>

            <header className="usuario" id="UsuarioM20">
                <img className="user1" src={require(`./Images/usuario1.png`)} alt="usuario1"/>
                <span className="Username" id="UsernameM20">Emilio Berrocal</span>
            </header>
            <div className="comentario">Muy buena atención.</div>
        </div>
    );

}

export default Mockup_20;