import { logout } from "./Firebase";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import "./layout/header.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

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
                    <a className={logo} href="/" alt="">
                        <img src={logo} alt="אמיצים" className="header__logo logo--small" />
                    </a>
                </div>
                <nav className="nav">
                    <ul className="nav__list nav__list--primary">
                    <li className="nav__item"><Link to="/menu" className="nav__link">ראשי</Link></li>
                        <li className="nav__item"><Link to="/profile" className="nav__link">פרופיל</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">עדכונים</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">קריאות</Link></li>
                        <li className="nav__item"><Link to="/events" className="nav__link">אירועים</Link></li>
                        <li className="nav__item"><Link to="/" className="nav__link">משלוחים</Link></li>
                    </ul>
                    <ul className="nav__list nav__list--secondary">
                        <li className="nav__item"><Link className="nav--btn btn--accent" to="/login" onClick={() => { logout() }}>התנתק</Link></li>
                    </ul>
                </nav>
                <br /><br />
                <h1 className="main__title">ברוך הבא, {username}&nbsp;&nbsp;|&nbsp;&nbsp;</h1>
            </div>
            <script src="../assets/hamburger.js"></script>
        </header>
    )
}

export default Header;