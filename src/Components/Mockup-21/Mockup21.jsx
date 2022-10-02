import React from "react";
import "../Mockup-21/Mockup21-stylesheet.css"
import influencer from"./influencer.JPG"
import influencer2 from "./influencer2.JPG"

function Mockup21(){
    return(
        <div className="bg-light">
            <div style={{fontSize:"40px", marginLeft:"50px", marginBottom:"40px"}}>
                <b>Influencers</b>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-2">
                <div class="col">
                    <div class="card">
                        <iframe width="560" height="315" id="video" src="https://www.youtube.com/embed/4vpPJb392Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="card-body">
                            <div className="background-autor-1">
                                Mr Top 5
                            </div>
                            <p  class="card-text">This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.</p>
                        </div>    
                            
                        <div className="card-body" style={{height:"250px"}}>    
                            <div className="row" style={{paddingTop:"30px"}}>
                                <div className="col-sm-2">
                                    <img src={influencer} style={{height:"60px", width:"80px"}} alt="" />
                                </div>
                                <div className="col-sm-10">
                                    <b>Mr Top 5</b>
                                    <p>Thanks to <a href="https://www.youtube.com/c/MoreMrTop5">@MrTop5</a> for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>    
                                </div>
                                    
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <iframe width="560" height="315" id="video2" src="https://www.youtube.com/embed/UhO7MLntkDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <div className="background-autor-2">
                                    Short Circuit
                                 </div>
                                <p class="card-text">You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!</p>

                            </div>
                            <div className="card-body" style={{height:"250px"}}>    
                                <div className="row" style={{paddingTop:"30px"}}>
                                    <div className="col-sm-2">
                                    <img src={influencer2} style={{height:"60px", width:"80px"}} alt="" />
                                </div>
                                <div className="col-sm-10">
                                    <b>Short Circuits</b>
                                    <p>Thanks for the awesome review <a href="https://www.youtube.com/c/ShortCircuit"/>@ShortCircuit</p>    
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
  


    )
}
export default Mockup21