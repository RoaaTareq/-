import React, { useState } from "react";
import "../../App.css";
import Team from '../../assets/Images/Team.png'

const About = () => {
    return (
        <section className="About-section">
            <div className="container">
                
                <div className="row align-items-center ">
                    {/* <div className="col-6">
                        
                      <img src={Team} alt="Jointeam" />
                    </div> */}
                    <div className="col-6">
                        
                      <h1>الانضمام للفريقنا</h1>
                      <button className="btn-login">الانضمام للفريق المنصة</button>
                      </div>
                </div>
            </div>
        </section>
    );
};

export default About;
