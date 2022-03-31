import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth"
import { auth } from './firebase';
import "./App.css";
import "./New.css";

export default props => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="nav">
                <a href="#" onClick={() => navigate(-1)} className="back">›</a>
                <a href="#" onClick={() => navigate(1)} className="forward">‹</a>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    <div class="col">
                        <div class="hamburger" id="menu">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </div>
                </button>
                <div class="dropdown-content">
                    <a href="#">פרופיל</a>
                    <a href="#">אירועים</a>
                    <a href="#" onClick={() => { signOut(auth).then(() => { alert("OK")}) }}>התנתקות</a>
                </div>
            </div>
        </div>
    );
}
