import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import AdminPer from "./AdminPer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const login = () => {
        logInWithEmailAndPassword(email, password).then(() => { navigate('/login') });
    }

    useEffect(() => {
        if (user) {
            navigate('');
        }
    }, [user, navigate]);

    return (
        <div>
            <AdminPer />
            <h1>התחברות מתנדבים</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" autoComplete="username" required />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" autoComplete="current-password" required />
            <br />
            <button className="btn-login" onClick={login}>התחברות</button>
            <div>
                <Link to="/reset">שכחתי סיסמה</Link>
            </div>
        </div>
    );
}
export default Login;