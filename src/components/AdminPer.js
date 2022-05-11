 import { getAuth } from "firebase/auth";
 import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const AdminPer = () => {
    const navigate = useNavigate();
    const user = getAuth();
    let isAdmin = false;

    useEffect(() => {
        onAuthStateChanged(user, (user) => {
            if (user) {
                getDocs(collection(db, "users")).then((data) => {
                    data.forEach((doc) => {
                        if (!isAdmin && user && user.uid === doc.data().uid && doc.data().isAdmin) {
                            console.log('Logged in as administrator (', doc.data().name, ')');
                            isAdmin = true;
                            navigate('/admin');
                        }
                    });
                    if (user && isAdmin === false)
                        navigate('/dashboard');
                });
            } else {
                console.log("User not connected");
                navigate('/login');
            }
        });
    }, [user]);

    return null;
};

export default AdminPer;