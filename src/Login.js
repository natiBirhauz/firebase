import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.wixstatic.com/media/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg/v1/fit/w_2500,h_1330,al_c/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg" height='300' width='300'/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                <button className="btn-login" onClick={() => signInWithEmailAndPassword(email, password)}>התחברות</button>
                <br />
                <button className="btn-login" onClick={signInWithGoogle}>התחברות עם Google</button>
                <div>
                    <Link to="/reset">שכחתי סיסמא</Link>
                </div>
                <div>
                    <Link to="/register">הרשמה</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;