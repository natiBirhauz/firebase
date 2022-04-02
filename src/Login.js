import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const login = () => {
        logInWithEmailAndPassword(email, password).then(function (user) {
            alert("Welcome back " + user.user.displayName + "!");
        })
            .catch(function (error) {
                alert("Wrong email/password, Try again.");
            });
    }

    useEffect(() => {
        if (user)
            navigate("/dashboard");
    }, [user, loading]);

    return (
        <div>
            <h1>התחברות מתנדבים</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" required />
            <br />
            <button className="btn-login" onClick={login}>התחברות</button>
            <br /><br />
            <button className="btn-login" onClick={signInWithGoogle}>התחברות עם Google</button>
            <div>
                <Link to="/reset">שכחתי סיסמה</Link>
            </div>
            <div>
                <Link to="/register">הרשמה</Link>
            </div>
        </div>
    );
}
export default Login;