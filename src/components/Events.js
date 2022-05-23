import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import "./Users.css"

function Events() {
    const [events, setEvents] = useState([]);
    const [roles, setRoles] = useState([]);
    const eventsCollectionRef = collection(db, "events");
    let res = [];
    const delEvent = (created) => {
        //     console.log(events.find((doc) => (doc.created === created)));
        //     // setEvents(getDocs(eventsCollectionRef));.then((querySnapshot) => {
        //     //     querySnapshot.forEach((doc) => {

        //     //         console.log(doc.id, " => ", doc.data())
        //     //    })
        //     //})
    }

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(collection(db, 'events'));
            setEvents(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getEvents();
    }, []);

    useEffect(() => {
        const getRoles = async () => {
            const data = await getDocs(collection(db, 'roles'));
            setRoles(data.docs.map((doc) => ({ ...doc.data() })))
            await roles.forEach((e) => console.log(e));
        }
        getRoles();
    }, []);

    return (
        <div className="table-wrapper">
            <h1>רשימת אירועים</h1>
            <table className="fl-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>שם האירוע</td>
                        <td>תאריך</td>
                        <td>סוג</td>
                        <td>יוצר</td>
                        <td>פעיל</td>
                        <td>פעולות</td>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => {
                        let active;
                        event.is_active ? active = yes : active = no;
                        console.log(res);
                        // roles.forEach((role, i) => {
                        //     console.log(role);
                        //     // if (roles[i].role == event.roles[i])
                        //     //     console.log(role.role);
                        // });
                        return (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.event_name}</td>
                                <td>{event.event_date}</td>
                                <td>{event.type}</td>
                                <td>{event.name}</td>
                                <td><img src={active} alt='' /></td>
                                <td>
                                    <img src="../images/edit.png" alt="עריכה" />
                                    <a href="/" onClick={() => delEvent(event.created)}><img src="../images/delete.png" alt="מחיקה" /></a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Events;