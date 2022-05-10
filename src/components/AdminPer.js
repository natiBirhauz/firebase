import { db, auth } from "./Firebase";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const AdminPer = () => {
    const navigate = useNavigate();
    const user = useAuthState(auth);
    let isAdmin = false;

    useEffect(() => {
        getDocs(collection(db, "users")).then((data) => {
            data.forEach((doc) => {
                if (getAuth().currentUser && getAuth().currentUser.uid === doc.data().uid && doc.data().isAdmin) {
                    console.log('Logged in as administrator (', doc.data().name, ')');
                    isAdmin = true;
                    navigate('/admin');
                };
            });
        }).then(() => {
            if (getAuth().currentUser && isAdmin === false)
                navigate('/dashboard');
        });;
    }, [user]);
    return null;
};

export default AdminPer;