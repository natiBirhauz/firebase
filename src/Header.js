import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { signOut } from "firebase/auth"
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import "./New.css";

export default props => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (!user)
            navigate("/login");
    }, [user]);

    return (
        <div>
            {/* <div className="nav">
                <a href="#" onClick={() => navigate(-1)} className="back">›</a>
                <a href="#" onClick={() => navigate(1)} className="forward">‹</a>
            </div> */
            /* <div className="dropdown">
                <button className="dropbtn">
                    <div className="col">
                        <div className="hamburger" id="menu">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#">פרופיל</a>
                    <a href="#">אירועים</a>
                    <a href="#" onClick={() => { signOut(auth) }}>התנתקות</a>
                </div>
            </div> */}
            <a href="/"><img src="https://static.wixstatic.com/media/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg/v1/fit/w_2500,h_1330,al_c/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg" height="250" width="250" alt="Amitsim"/></a>
        </div>
    );
}