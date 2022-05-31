import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import '../components/layout/profile.css';
import Header from "./Header";
import AdminPer from "./AdminPer";

function Events() {
    const [events, setEvents] = useState([]);
    const eventsCollectionRef = collection(db, "events");

    const delEvent = async (id) => {
        let errOccurred = false;
        await deleteDoc(doc(db, "events", id)).catch((e) => {
            errOccurred = true;
            alert("אירעה שגיאה, נסה שנית");
        }).finally(() => {
            if (!errOccurred)
                window.location.reload();
        });
    }

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(query(eventsCollectionRef, orderBy('event_date')));
            setEvents(data.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
        }
        getEvents();
    }, []);



    return (
        <div>
            <Header />
            <AdminPer url="/events" />
            <br />
            <div className="box container">
                <h1 className="user-details__title title container">אירועים קרובים</h1>
            </div>
            <div className="table-wrapper box container">
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
                            let active, toggle;
                            event.is_active ? active = yes : active = no;
                            event.is_active ? toggle = 'השבת' : toggle = 'הפעל';
                            event.is_active ? active = yes : active = no;
                            return (
                                <tr key={event.uid}>
                                    <td>{event.event_name}</td>
                                    <td>{new Date(event.event_date.seconds * 1000).toLocaleDateString()}</td>
                                    <td>{event.type}</td>
                                    <td>{event.name}</td>
                                    <td>
                                        <img src={active} alt='' />
                                    </td>
                                    <td>
                                        <img src="../images/edit.png" alt="עריכה" />
                                        <a onClick={() => delEvent(event.uid)} href="#"><img src="../images/delete.png" alt="מחיקה" /></a>
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