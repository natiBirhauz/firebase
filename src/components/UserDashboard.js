import { logout } from "./Firebase";
import { Link } from "react-router-dom";
import "../components/layout/App.css";

function AdminDashboard() {

    return (
        <div>
            <h1>האזור האישי</h1>
            <h2>ממשק מתנדב</h2>
            <div className="container2">
                <span className="flex"><Link to="/profile">פרופיל</Link></span>
                <span className="flex"><Link to="/events">אירועים קרובים</Link></span>
                <span className="flex logout"><Link to="/login" onClick={() => { logout() }}>התנתק</Link></span>
            </div>
        </div>
    )
};

export default AdminDashboard;