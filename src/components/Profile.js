import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth'
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from "./Firebase";
import Header from './Header';
import AdminPer from './AdminPer';
import '../components/layout/profile.css';

function Profile() {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const user = getAuth();
    var failed = false;

    onAuthStateChanged(user, () => {
        if (user.currentUser) {
            setName(user.currentUser.displayName);
            setEmail(user.currentUser.email);
        }
    });

    const loginAndUpdate = event => {
        event.preventDefault();
        try {
            updateProfile(user.currentUser, { displayName: name });
            updateEmail(user.currentUser, email);
            updatePassword(user.currentUser, password);
        } catch (e) {
            if (e.code === 'auth/invalid-email')
                console.log("הכנס כתובת מייל תקינה")
            else if (e.code === 'auth/requires-recent-login')
                console.log("מטעמי בטיחות, יש להתנתק ולהתחבר מחדש על מנת לשנות את כתובת המייל")
            else
                console.log(e);
            failed = true;
        } finally {
            if (!failed) {
                // Update also in users collection
                getDocs(collection(db, "users")).then((data) => {
                    data.forEach((doc) => {
                        if (doc.data().uid === user.currentUser.uid) {
                            updateDoc(doc.ref, { 'name': name, 'email': email, 'phoneNumber': phone, 'password': password });
                        }
                    });
                });
                alert("הפרטים שונו בהצלחה");
                setTimeout(() => navigate('/'), 500);
            }
        }
    }

    return (
        <div className="user-details">
            <Header />
            <AdminPer url="/profile" />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">פרטי משתמש</h1>
            </div>
            <div className="container row">
                <div className="box box--sub col">
                    <div className="user-details__profile container">
                        <h2 className="user-details__profile__title">פרופיל</h2>
                        <div className="user-details__profile__item spaced">
                            <p className="property">שם מלא:</p>
                            <p className="property--value">{name}</p>
                        </div>
                        <div className="user-details__profile__item spaced">
                            <p className="property">אימייל:</p>
                            <p className="property--value">{email}</p>
                        </div>
                        <div className="user-details__profile__item spaced">
                            <p className="property">טלפון:</p>
                            <p className="property--value">{null}</p>
                        </div>
                        <div className="user-details__profile__item spaced">
                            <p className="property">תאריך לידה:</p>
                            <p className="property--value"></p>
                        </div>
                        <div className="user-details__profile__item spaced">
                            <p className="property">עיר:</p>
                            <p className="property--value"></p>
                        </div>
                        <div className="user-details__profile__item spaced">
                            <p className="property">תעודת זהות:</p>
                            <p className="property--value"></p>
                        </div>
                        <button className="btn--accent">ערוך</button>
                    </div>
                </div>
                <div className="box box--sub">
                    <div className="user-details__roles container">
                        <h2 className="user-details__roles__title">רשימת תפקידים</h2>
                        <ol className="user-details__roles__list">
                            <li>ספק מזון</li>
                        </ol>
                        <button className="btn--accent">ערוך</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;