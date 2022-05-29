import { logout } from "./Firebase";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import "./layout/header.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function Header() {
    const user = getAuth();
    let [username, setUsername] = useState('');

    useEffect(() => {
        onAuthStateChanged(user, () => {
            if (user.currentUser)
                setUsername(user.currentUser.displayName);
        })
    }, [user]);

    return (
        <header>
            <div className="container">
                <div className="spaced">
                    <button className="nav-toggle" aria-label="open navigation">
                        <span className="hamburger"></span>
                    </button>
                </div>
                <ul className="nav__list nav__list--secondary">
                    <h1 className="main__title"><li className="nav__item">ברוך הבא, {username}</li></h1>
                    <li className="nav__item"><Link className="nav--btn btn--accent" to="/login" onClick={() => { logout() }}>התנתק</Link></li>
                </ul>
                <nav className="nav">
                    <a href="/menu">
                        <img src={logo} alt="אמיצים" className="header__logo logo--small" />
                    </a>
                    <ul className="nav__list nav__list--primary">
                        <li className="nav__item"><Link to="/menu" className="nav__link">ראשי</Link></li>
                        <li className="nav__item"><Link to="/profile" className="nav__link">פרופיל</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">עדכונים</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">קריאות</Link></li>
                        <li className="nav__item"><Link to="/events" className="nav__link">אירועים</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">משלוחים</Link></li>
                    </ul>
                </nav>
                <br /><br />
            </div>
            <script src="../assets/hamburger.js"></script>
        </header>
    )
}

export default Header;