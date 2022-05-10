import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminPer from "./AdminPer";
import "../components/layout/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    var errOccured = false;

    const login = event => {
        event.preventDefault();
        const err = document.getElementById('err');
        logInWithEmailAndPassword(email, password).catch((e) => {
            if (email === '')
                err.innerText = 'לא הוכנסה כתובת אימייל';
            else if (e.message.includes('user-not-found'))
                err.innerHTML = 'לא נמצא משתמש';
            else if ((e.message.includes('internal-error') || e.message.includes('wrong-password')))
                err.innerHTML = 'בדוק פרטי התחברות ונסה שנית';
            else if (e.message.includes('too-many-requests'))
                err.innerHTML = 'עכב נסיונות התחברות מרובים, החשבון ננעל זמנית. נסה מאוחר יותר או שחזר את הסיסמה';
            errOccured = true;
            console.log(e);
        }).finally(() => {
            if (!errOccured) {
                err.style.color = 'green';
                err.innerText = 'התחברת בהצלחה ✓, הינך מועבר לאיזור האישי';
            }
        });
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
            <form onSubmit={login}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" autoComplete="username" required />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" autoComplete="current-password" required />
                <p id="err" className="err"></p>
                <button className="btn-login" type="submit">התחברות</button>
            </form>
            <div>
                <Link to="/reset">שכחתי סיסמה</Link>
            </div>
        </div>
    );
}
export default Login;