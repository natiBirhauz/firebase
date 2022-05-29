import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import '../components/layout/profile.css';
import Header from "./Header";
import AdminPer from "./AdminPer";

function Events() {
    const [events, setEvents] = useState([]);
    const eventsCollectionRef = collection(db, "events");

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
            const data = await getDocs(eventsCollectionRef);
            setEvents(data.docs.map((doc) => (doc.data())));
        }
        getEvents();
    });

    return (
        <div>
            <Header />
            <AdminPer url="/events" />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">רשימת אירועים</h1>
            </div>
            <div className="table-wrapper box container">
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
                            return (
                                <tr key={event.created}>
                                    <td>{event.id}</td>
                                    <td>{event.event_name}</td>
                                    <td>{event.event_date}</td>
                                    <td>{event.type}</td>
                                    <td>{event.name}</td>
                                    <td><img src={active} alt='' /></td>
                                    <td>
                                        <img src="../images/edit.png" alt="עריכה" />
                                        <a href="/events"><img src="../images/delete.png" alt="מחיקה" /></a>
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

export default Events;