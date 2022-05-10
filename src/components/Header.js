// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./Firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import logo from '../assets/logo.jpg'
import "../components/layout/App.css";

function Header() {
    // const navigate = useNavigate();
    // const [user] = useAuthState(auth)
    
    // useEffect(() => {
    //     if (!user)
    //         navigate("/login");
    // }, [user]);

    return (
        <div>
            <a href="/"><img src={logo} height="250" width="250" alt="Amitsim" /></a>
        </div>
    );
}

export default Header;