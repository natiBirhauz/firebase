import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';

import './Users.css'

function delUser(uid) {
    console.log(uid);
    // Need AdminSDK
    // getAuth().deleteUser(uid).then(() => {
    //         console.log('Successfully deleted user');
    //     })
    //     .catch((error) => {
    //         console.log('Error deleting user:', error);
    //     });
}

function Users() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getUsers();
    });
    return (
        <div className="table-wrapper">
            <h1>רשימת מתנדבים</h1>
            <table className="fl-table">
                <thead>
                    <tr>
                        <td>שם</td>
                        <td>מייל</td>
                        <td>מין</td>
                        <td>פעולות</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.uid}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <img src="../images/edit.png" alt="עריכה" />
                                    <button onClick={() => delUser(user.uid)}><img src="../images/delete.png" alt="מחיקה" /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Users;