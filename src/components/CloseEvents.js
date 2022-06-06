import { db } from "./Firebase";
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from "firebase/firestore";
import "./layout/dashboard.css";
import "./layout/notifications.css";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const CloseEvents = () => {
    const [events, setEvents] = useState([]);
    const [userRoles, setUserRoles] = useState([]);
    const [categories, setCategories] = useState([]);

    const user = getAuth();
    let refUser;

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(query(collection(db, "events"), orderBy('event_date')));
            setEvents(data.docs.map((doc) => ({ ...doc.data(), uid: doc.ref })));
        }
        getEvents();
        getRoles();
    }, []);

    const getRoles = async () => {
        getDocs(collection(db, "roles")).then((data) => {
            setCategories(data.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
        });
    }

    const getUserRoles = async () => {
        const querySnapshot = await getDocs(refUser);
        querySnapshot.forEach((doc) => {
            setUserRoles(userRoles => userRoles = doc.data().roles);
        });
    }

    useEffect(() => {
        onAuthStateChanged(user, () => {
            if (user.currentUser) {
                refUser = query(collection(db, "users"), where("uid", "==", user.currentUser.uid));
                getUserRoles();
                //const found = userRoles.some(r=> arr2.includes(r))
            }
        });
    }, [user]);

    const signUpForEvent = async (uid, newRoles, index) => {
        let roleArr = newRoles[index].split('-');
        roleArr[2] = parseInt(roleArr[2]) - 1;
        newRoles[index] = roleArr.join('-');
        await updateDoc(uid, { roles: newRoles });
        window.location.reload();
    }

    let addToList = false;
    let date;
    let result = [];
    return (
        <div>
            {events.map((e, index) => { // Events
                addToList = false;
                result = []
                e.roles.forEach((eventNeed, index1) => { // Each role in event
                    const splitRoles = eventNeed.split('-');
                    const cat = splitRoles[0];
                    const role = splitRoles[1];
                    const qtyNeeded = splitRoles[2];
                    if (!e.is_active || qtyNeeded <= 0) return;
                    if (userRoles.some((r) => eventNeed.includes(r))) {
                        addToList = true;
                        date = e.event_date.toDate().toLocaleDateString('he-IL');
                        result.push(<p key={index1}><button id="index" className="btn-toggle" onClick={() => signUpForEvent(e.uid, e.roles, index1)}>הירשם בתור {categories[cat][role]} [{qtyNeeded}]</button></p>)
                    }
                });
                if (addToList) {
                    return (
                        <div key={index}>
                            <div className="seperator"></div>
                            <h3>שם האירוע {e.event_name}</h3>
                            <h5>מתי? {date}</h5>
                            {result}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default CloseEvents;