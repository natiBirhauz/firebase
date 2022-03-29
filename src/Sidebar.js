import React from "react";
import './App.css';
import { Link } from "react-router-dom";

export default props => {
    return (
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to="#"><li>פרופיל</li></Link>
                    <Link to="#"><li>רשימת אירועים</li></Link>
                    <Link to="#"><li>הגדרות</li></Link>
                    <Link to="#"><li>צור קשר</li></Link>
                </ul>
            </div>
        </nav>
    );
};