import { React, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "./firebase";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        registerWithEmailAndPassword(name, email, password).then((user) => {
            if (user) {
                alert("Welcome " + name)
            }
        });
        navigate('/dashboard');
    };

    const passValidate = () => {
        if (document.getElementById('pass').value !== document.getElementById('validPass').value) {
            document.getElementById('validPass').style.borderColor = "red";
            document.getElementById('err').innerText = "סיסמאות לא תואמות";
            document.getElementById('err').style.color = "red";
        }
        else {
            document.getElementById('validPass').style.borderColor = "black";
            document.getElementById('err').innerText = "";
        }
    }

    useEffect(() => {
        if (user)
            navigate("/dashboard");
    }, [user, loading]);

    return (
        <div>
            <h1>רישום מתנדב חדש</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="שם מלא" required />
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" required />
            <br />
            <input type="password" id="validPass" onChange={passValidate} placeholder="אימות סיסמה" required />
            <span id="err"></span>
            <br />
            <button className="btn-login" onClick={register}>הרשמה</button>
            <br /><br />
            <button className="btn-login" onClick={signInWithGoogle}>הרשמה עם Google</button>
            <div>יש לך כבר חשבון? לחץ <Link to="/">כאן</Link>.</div>
        </div>
    )
}

export default Register;