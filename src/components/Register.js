import { React, useState } from "react";
import { registerWithEmailAndPassword } from "./Firebase";
import Header from "./Header";
import AdminPer from "./AdminPer";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");

    const register = (event) => {
        event.preventDefault();
        setPassword(Math.random().toString(15).substring(2, 20));
        registerWithEmailAndPassword(name, email, password, gender, tel);
    };

    return (
        <div>
            <Header />
            <AdminPer url="/register" />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">רישום מתנדב חדש</h1>
            </div>
            <br />
            <div className="box container">
                <p>סיסמה אקראית תישלח לכתובת המייל של המתנדב בסוף תהליך הרישום</p>
                <form className="login__form" onSubmit={register}>
                    <input className="form__input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="שם מלא" required />
                    <select className="form__input" defaultValue={"default"} onChange={(e) => setGender(e.target.value)}>
                        <option value="default" disabled>בחר מגדר</option>
                        <option value="זכר">זכר</option>
                        <option value="נקבה">נקבה</option>
                        <option value="אחר">אחר</option>
                    </select>
                    <input className="form__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
                    <input className="form__input" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="מספר פלאפון" required />
                    <button type="submit" className="btn--accent">יצירת משתמש</button>
                </form>
            </div>
        </div>
    )
}

export default Register;