import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth'
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "./Firebase";

function Profile() {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const user = getAuth();
    var failed = false;

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
        <div>
            <h1>פרופיל</h1>
            <form className='form_profile' onSubmit={loginAndUpdate}>
                <p>
                    <label htmlFor='name'>שם מלא: </label>
                    <input id='name' type='text' name='name' defaultValue={user.currentUser.displayName} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label htmlFor='id'>תעודת זהות: </label>
                    <input id='id' type='number' defaultValue={null} />
                </p>
                <p>
                    <label htmlFor='id'>אימייל: </label>
                    <input id='email' type='email' defaultValue={user.currentUser.email} onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label htmlFor='phone'>פלאפון: </label>
                    <input id='phone' type='tel' defaultValue={user.currentUser.phoneNumber} onChange={(e) => setPhone(e.target.value)} />
                </p>
                <p>
                    <label htmlFor='password'>סיסמה: </label>
                    <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p><button className='btn-add' type='submit'>שמור שינויים</button></p>
            </form>
        </div >
    )
}

export default Profile;