import React, { useState } from "react";
import "../../App.css";
import "../../assets/styles/components/Topsection.css";
import Microphone from "../../assets/Images/Microphone.png";

const Topsection = () => {
    return (
        <section className="Main-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-6">
                        <h1>منصة شبابنا</h1>
                        <p>
                        مرحبًا بكم في YouthVoice - حيث تهم الأصوات الشابة. نحن منصة شبابية تعزز المناقشات حول القيادة الاقتصادية والسياسية. مهمتنا هي تمكين الشباب للمشاركة بمعنى في القضايا التي تشكل عالمنا. انضم إلينا في تبادل الأفكار واستكشاف وجهات النظر المتنوعة من أجل غدٍ أكثر إشراقًا.
                        </p>
                        
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src={Microphone} alt="trackingapp" className="trackingapp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topsection;
