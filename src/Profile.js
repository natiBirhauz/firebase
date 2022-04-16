import { getAuth, updateProfile, updateEmail, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app, auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

function Profile() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();
    const user = getAuth();
    const db = getFirestore(app);

    let username = ''
    // if (user)
    //     username = user.displayName

    const loginAndUpdate = async () => {
        // Calling authentication function
        // let auth = getAuth()

        // You need to pass the authentication instance as param
        alert(user.currentUser.displayName)
        // Passing user's object as first param and updating it
        updateProfile(user.currentUser, name);

        updateEmail(user.currentUser, email).then(navigate('/dashboard'));
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
                    <input id='id' type='number' defaultValue={username} />
                </p>
                <p>
                    <label htmlFor='id'>אימייל: </label>
                    <input id='email' type='email' defaultValue={user.currentUser.email} onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label htmlFor='phone'>פלאפון: </label>
                    <input id='phone' type='tel' defaultValue={user.phoneNumber} />
                </p>
                <p>
                    <label htmlFor='password'>סיסמה: </label>
                    <input id='password' type='password' />
                </p>
                <p>
                    <label htmlFor='password2'>אימות סיסמה: </label>
                    <input id='password2' type='password' />
                </p>
                <p><button className='btn-add' type='submit'>שמור שינויים</button></p>
            </form>
        </div >
    )
}

export default Profile;