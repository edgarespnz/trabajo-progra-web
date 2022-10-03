import React from "react";

function ContactInformation() {
    return (
        <div className="contact-information">
            <h2 className="title-contact">Contact Information</h2>
            <div className="email">
                <div className="col-5" id="nameAndLogOut">
                    <img className="userImage" src={require(`./images/icon-user.png`)} alt="user" />
                    
                        <h2>Ed Va (edjahevs@gmail.com)
                            <a href="">Log Out</a>
                        </h2>

                </div>
                <div className="col5"></div>
            </div>
        </div>
    );
}

export default ContactInformation