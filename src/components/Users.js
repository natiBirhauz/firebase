import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import './Users.css';
import Header from './Header';
import AdminPer from './AdminPer';
let arr = [];

function Users() {
    const [users, setUsers] = useState([]);
    const editUser = (uid) => {
        console.log(uid);
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collection(db, 'users'));
            setUsers(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getUsers();
    }, []);

    return (
        <div>
            <Header />
            <AdminPer url="/users" />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">רשימת מתנדבים</h1>
            </div>
            <div className="table-wrapper box container">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <td>שם</td>
                            <td>מייל</td>
                            <td>מין</td>
                            <td>תפקידים</td>
                            <td>מצב</td>
                            <td>פעולות</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            let active;
                            user.isActive ? active = yes : active = no;
                            if (user.roles.length > 0) {
                                user.roles.forEach(role => {
                                    getDoc(role).then((r) => {
                                        if (!arr.includes(r.data().role)) {
                                            arr.push(r.data().role);
                                        }
                                    });
                                });
                            }
                            console.log(arr)
                            return (
                                <tr key={user.uid}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{arr}</td>
                                    <td><img src={active} alt="" /></td>
                                    <td>
                                        <a onClick={() => editUser(user.uid)}><img src="../images/edit.png" alt="עריכה" /></a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;