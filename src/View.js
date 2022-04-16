import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { collection, onSnapshot } from 'firebase/firestore';

function View() {
    const [users, getUsers] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, 'users'), (snapshot) => {
            getUsers(snapshot.docs.map(doc => doc.data()))
        })
    });
    return (
        <div className="App">
        </div>
    );
}

export default View;