import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Users.css"

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
            setEvents(data.docs.map((doc) => (doc.data)));
        }
        getEvents();
    });

    return (
        <div className="table-wrapper">
            <h1>רשימת אירועים</h1>
            <table className="fl-table">
                <thead>
                    <tr>
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
                        return (
                            <tr key={event.created}>
                                <td>{event.event_name}</td>
                                <td>{event.event_date}</td>
                                <td>{event.type}</td>
                                <td>{event.name}</td>
                                <td>{event.is_active.toString()}</td>
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