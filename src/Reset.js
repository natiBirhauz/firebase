import React, { useState } from "react";
import { sendPasswordReset } from "./firebase";
import "./Login.css";

function Reset() {
    const [email, setEmail] = useState("");

    const sendPassword = () => {
        sendPasswordReset(email)
            .catch(function (error) {
                alert(error)
            });
    }

    return (
        <div>
            <h1>שכחתי סיסמה</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <button className="btn-login" onClick={sendPassword}>שלח</button>
        </div>
    );
}
export default Reset;