import React, { useState } from "react";
import "../../assets/styles/components/header.css";
import '../../App.css'

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="d-flex  align-items-center">
                    <div>
                        <h1 className="main-title">منصة شبابنا</h1>
                    </div>
                    <ul class="Main-list ">
                        <li>الرئسية</li>
                        <li>عنا</li>
                        <li>الانضمام لنا</li>
                        <li>التواصل معنا</li>
                    </ul>
                  
                </div>
            </div>
        </header>
    );
};

export default Header;
