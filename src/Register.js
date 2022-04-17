import { React, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "./firebase";
import "./Login.css";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        setPassword(Math.random().toString(15).substring(2, 20));
        registerWithEmailAndPassword(name, email, password, gender, tel);
    };

    return (
        <div>
            <h1>רישום מתנדב חדש</h1>
            <p>הסיסמה תישלח לכתובת מייל של המתנדב בסוף הרישום</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="שם מלא" required />
            <br />
            <select defaultValue={"def"} onChange={(e) => setGender(e.target.value)}>
                <option value="def" disabled>בחר מגדר</option>
                <option value="זכר">זכר</option>
                <option value="נקבה">נקבה</option>
                <option value="אחר">אחר</option>
            </select>
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="מספר פלאפון" required />
            <br />
            <button className="btn-login" onClick={register}>יצירת משתמש</button>
        </div>
    )
}

export default Register;