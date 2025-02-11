import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import '../components/layout/Users.css';
import Header from './Header';
import AdminPer from './AdminPer';

function Users() {
    const [users, setUsers] = useState([]);

    const editUser = (uid) => {
        console.log(uid);
    }


    const deActive = (uid) => {
        // Update also in users collection
        getDocs(collection(db, "users")).then((data) => {
            data.forEach((doc) => {
                if (doc.data().uid === uid) {
                    let active, errOccurred;
                    doc.data().isActive ? active = false : active = true;
                    updateDoc(doc.ref, { 'isActive': active }).catch((e) => {
                        errOccurred = true;
                        alert("אירעה שגיאה, נסה שנית");
                    }).finally(() => {
                        if (!errOccurred)
                            window.location.reload()
                    });
                }
            });
        })
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
                            <td>פלאפון</td>
                            <td>ת"ז</td>
                            <td>מצב</td>
                            <td>הרשאות מנהל</td>
                            <td>פעולות</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            let active, admin, toggle;
                            user.isActive ? active = yes : active = no;
                            user.isActive ? toggle = 'השבת' : toggle = 'הפעל';
                            user.isAdmin ? admin = yes : admin = no;

                            return (
                                <tr key={user.uid}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.tel}</td>
                                    <td>{user.ssn}</td>
                                    <td>
                                        <img src={active} alt="" />
                                        <a onClick={() => deActive(user.uid)}><button className='btn-toggle'>{toggle}</button></a>
                                    </td>
                                    <td><img src={admin} alt="" /></td>
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