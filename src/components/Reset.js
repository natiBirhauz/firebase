import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordReset } from './Firebase';
import Header from './Header';

function Reset() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    var errOccured = false;
    
    const sendPassword = (event) => {
        event.preventDefault();
        const err = document.getElementById('err');
        sendPasswordReset(email)
            .catch((e) => {
                if (e.message.includes('auth/invalid-email'))
                    err.innerText = 'כתובת אימייל לא תקינה';
                else if (e.message.includes('auth/missing-email'))
                    err.innerText = 'הכנס כתובת אימייל';
                else if (e.message.includes('user-not-found'))
                    err.innerText = 'לא נמצא משתמש';
                errOccured = true;
            }).finally(() => {
                if (!errOccured) {
                    err.style.color = 'green';
                    err.innerText = 'נשלח בהצלחה ✓, הינך מועבר לדף ההתחברות';
                    setTimeout(() => { navigate("/login") }, 2500);
                }
            });
    }

    return (
        <div>
            <Header />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">איפוס סיסמה</h1>
            </div>
            <br />
            <div className="box container">
                <form onSubmit={sendPassword}>
                    <input className="form__input" id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='כתובת אימייל' required />
                    <p id='err' className='err'></p>
                    <button className='btn--accent'>אפס</button>
                </form>
            </div>
        </div>
    );
}
export default Reset;