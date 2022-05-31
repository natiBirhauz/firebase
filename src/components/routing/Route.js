import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Login from "../Login";
import AdminDashboard from "../AdminDashboard";
import Menu from "../Menu"
import Profile from "../Profile"
import NewEvent from "../NewEvent"
import Users from "../Users"
import Events from "../Events";
import Register from "../Register";
import Reset from "../Reset";
import UserDashboard from "../UserDashboard";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
// import NewDelivery from "../NewDelivery"
// import UserDashboard from "../UserDashboard";



const Routing = () => {
    const pathname = window.location.pathname;
    const [path, setPath] = useState(pathname);
    const user = getAuth();

    useEffect(() => {
        path === "/login" && setPath("/");
        path !== "/" && path !== "/dashboard" && setPath("/");
    }, [user.currentUser]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/" render={() => !user.currentUser ? <Navigate to={"/login"} /> : <Navigate to={path} />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/newevent" element={<NewEvent />} />
                <Route path="/users" element={<Users />} />
                <Route path="/events" element={<Events />} />
                <Route path="/register" element={<Register />} />
                <Route path="/userdash" element={<UserDashboard />} />
                {/*<Route path="/newdelivery" element={<NewDelivery />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                
                */}
            </Routes>
        </Router>
    );
}

export default Routing;