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
            <img src="https://static.wixstatic.com/media/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg/v1/fit/w_2500,h_1330,al_c/231ad7_7b2caab76cf4460b81167f13d65a5302~mv2.jpg" height='300' width='300' />
            <h1>שכחתי סיסמה</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="כתובת אימייל" required />
            <br />
            <button className="btn-login" onClick={sendPassword}>שלח</button>
        </div>
    );
}
export default Reset;