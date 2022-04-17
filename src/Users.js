import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Users.css'

function Users() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getUsers();
    }, []);
    return (
        <div className="table-wrapper">
            <h1>רשימת מתנדבים</h1>
            <table className="fl-table">
                <thead>
                    <tr>
                        <td>שם</td>
                        <td>מייל</td>
                        <td>מין</td>
                        <td>עריכה/מחיקה</td>
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
                                    <a href="#"><img src="../images/edit.png" alt="עריכה" /></a>
                                    <a href="#"><img src="../images/delete.png" alt="מחיקה" /></a>
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