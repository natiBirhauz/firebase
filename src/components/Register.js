import { React, useRef, useState, useEffect } from "react";
import { registerWithEmailAndPassword } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./Firebase";
import Header from "./Header";
import AdminPer from "./AdminPer";
import "./layout/roles.css"
import { useNavigate } from "react-router-dom";

function Register() {
    const email = useRef("");
    const fullName = useRef("");
    const gender = useRef("");
    const tel = useRef("");
    const [cats, setCats] = useState([]);
    let userStringsRoles = [];
    const navigate = useNavigate();

    const userRoles = (userRole) => {
        if (!userStringsRoles.includes(userRole))
            userStringsRoles.push(userRole);
        else
            userStringsRoles.splice(userStringsRoles.indexOf(userRole), 1);
    }

    const showCats = cats.map((subcat, indexCat) => {
        return (
            <div className='category' key={indexCat}>
                <h3>Category {indexCat}</h3>
                {subcat.map((role, indexRole) => {
                    return (
                        <div key={indexRole}>
                            <input type="checkbox" value={indexRole} id={`${indexCat}-${indexRole}`} onChange={() => userRoles(`${indexCat}-${indexRole}`)} />
                            <label htmlFor={`${indexCat}-${indexRole}`}>{role}</label>
                        </div>
                    )
                })}
            </div>
        )
    })

    useEffect(() => {
        const getRoles = async () => {
            setCats([]);
            const data = await getDocs(collection(db, 'roles'));
            data.forEach((e) => {
                const subarr = Object.values(e.data());
                setCats(cats => [...cats, subarr]);
            });
        }
        getRoles();
    }, []);


    const register = (event) => {
        event.preventDefault();
        const err = document.getElementById('err');
        const password = (Math.random().toString(15).substring(2, 20));
        let errOccured = false;

        try {
            registerWithEmailAndPassword(fullName.current.value, email.current.value, password, gender.current.value, tel.current.value, userStringsRoles);
        } catch (e) {
            errOccured = true;
            err.style.color = 'red';
            err.innerText = 'אירעה שגיאה בהרשמה, נסה/י שנית';
            console.error(e);
        } finally {
            if (!errOccured) {
                err.style.color = 'green';
                err.innerText = fullName.current.value + ' נרשם בהצלחה ✓';
                setTimeout(() => navigate('/menu'), 1000);
            }
        }
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
                    <input ref={fullName} className="form__input" type="text" placeholder="שם מלא" required />
                    <select ref={gender} className="form__input" defaultValue={"default"}>
                        <option value="default" disabled>בחר מגדר</option>
                        <option value="זכר">זכר</option>
                        <option value="נקבה">נקבה</option>
                        <option value="אחר">אחר</option>
                    </select>
                    <input ref={email} className="form__input" type="email" placeholder="כתובת אימייל" required />
                    <input ref={tel} className="form__input" type="tel" placeholder="מספר פלאפון" required />

                    {/* Roles */}
                    <div id='rolesList' className='container'>
                        {showCats}
                    </div>

                    {/* Errors */}
                    <p id="err" className="err"></p>

                    <button type="submit" className="btn--accent">יצירת משתמש</button>
                </form>
            </div>
        </div>
    )
}

export default Register;