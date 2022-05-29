import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth'
import { collection, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from "./Firebase";
import Header from './Header';
import AdminPer from './AdminPer';
import '../components/layout/profile.css';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ssn, setSSN] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [roles, setRoles] = useState('');
    const user = getAuth();
    let failed = false;
    let refUser = '', querySnapshot = '';

    useEffect(() => {
        onAuthStateChanged(user, () => {
            if (user.currentUser) {
                setName(user.currentUser.displayName);
                setEmail(user.currentUser.email);
                refUser = query(collection(db, "users"), where("uid", "==", user.currentUser.uid));
                getRoles();
            }
        });
    }, [user]);

    const loginAndUpdate = event => {
        event.preventDefault();
        try {
            updateProfile(user.currentUser, { displayName: name });
            updateEmail(user.currentUser, email);
            if (password !== '')
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
                            if (password !== '')
                                updateDoc(doc.ref, { 'name': name, 'email': email, 'phoneNumber': phone, 'password': password });
                            else
                                updateDoc(doc.ref, { 'name': name, 'email': email, 'phoneNumber': phone });

                        }
                    });
                });
                alert("הפרטים שונו בהצלחה");
            }
        }
    }

    const getRoles = async () => {
        let categories = [];
        getDocs(collection(db, "roles")).then((data) => {
            data.forEach((doc) => {
                categories.push(doc.data());
            });
        });

        querySnapshot = await getDocs(refUser);
        querySnapshot.forEach((doc) => {
            const myroles = doc.data().roles;
            setPhone(doc.data().tel);
            setCity(doc.data().city)
            setSSN(doc.data().ssn);

            let cat = 0, role = 0;
            for (let i = 0; i < myroles.length; i++) {
                cat = parseInt(myroles[i][0]);
                role = parseInt(myroles[i][2]);
                setRoles((roles) => roles + "<li>" + categories[cat][role] + "</li>");
            }
        });
        window.onload = await function () {
            document.getElementById('myroles').innerHTML = roles;
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
                        <form onSubmit={loginAndUpdate}>
                            <div className="user-details__profile__item spaced">
                                <p className="property">שם מלא:</p>
                                <input className="property--value input" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="user-details__profile__item spaced">
                                <p className="property">אימייל:</p>
                                <input className="property--value input" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="user-details__profile__item spaced">
                                <p className="property">טלפון:</p>
                                <input type="tel" className="property--value input" value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="user-details__profile__item spaced">
                                <p className="property">עיר:</p>
                                <input className="property--value input" value={city} readOnly />
                            </div>
                            <div className="user-details__profile__item spaced">
                                <p className="property">תעודת זהות:</p>
                                <input className="property--value input" value={ssn} readOnly />
                            </div>
                            <div className="user-details__profile__item spaced">
                                <p className="property">סיסמה:</p>
                                <input type="password" className="property--value input" placeholder='הכנס סיסמה חדשה' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button className="btn--accent">שמירה</button>
                        </form>
                    </div>
                </div>
                <div className="box box--sub">
                    <div className="user-details__roles container">
                        <h2 className="user-details__roles__title">רשימת תפקידים</h2>
                        <ol className="user-details__roles__list" id="myroles">
                            <div dangerouslySetInnerHTML={{ __html: roles }} />
                        </ol>
                        <button className="btn--accent" type="submit">עריכה</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;