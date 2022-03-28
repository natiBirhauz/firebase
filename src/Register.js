import { React, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "./firebase";
import BackButton from "./BackButton";
import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        if (name === '' || email === '' || password === '')
            alert("Try again")
        else
            registerWithEmailAndPassword(name, email, password).then((user) => {
                if (user)
                    alert("Welcome " + name)
            });
    };

    useEffect(() => {
        if (loading) return;
    });


    return (
        <div>
            <BackButton />
            <img src="https://static.wixstatic.com/media/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg/v1/fit/w_2500,h_1330,al_c/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg" height='300' width='300' />
            <h1>רישום מתנדב חדש</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="שם מלא" required />
            <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" required />
            <br />
            <input type="password" id="validPass" onChange={() => { if (document.getElementById('pass').value !== document.getElementById('validPass').value) document.getElementById('validPass').style.borderColor = "red"; else document.getElementById('validPass').style.borderColor = "black" }} placeholder="אימות סיסמה" required />
            <br />
            <button className="btn-login" onClick={register}>הרשמה</button>
            <br /><br />
            <button className="btn-login" onClick={signInWithGoogle}>הרשמה עם Google</button>
            <div>יש לך כבר חשבון? לחץ <Link to="/">כאן</Link>.</div>
        </div>
    )
}

export default Register;