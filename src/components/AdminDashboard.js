import { logout } from "./Firebase";
import { Link } from "react-router-dom";
import AdminPer from "./AdminPer"
import "../components/layout/App.css";

function AdminDashboard() {

    return (
        <div>
            <AdminPer />
            <h1>האזור האישי</h1>
            <h2>ממשק מנהל</h2>
            <div className="container2">
                <span className="flex"><Link to="/profile">פרופיל</Link></span>
                <span className="flex"><Link to="/newevent">יצירת אירוע חדש</Link></span>
                <span className="flex"><Link to="/newdelivery">יצירת משלוח חדש</Link></span>
                <span className="flex"><Link to="/users">עריכת מתנדבים</Link></span>
                <span className="flex"><Link to="/newevent">עריכת מוטבים</Link></span>
                <span className="flex"><Link to="/events">אירועים קרובים</Link></span>
                <span className="flex"><Link to="/register">יצירת משתמש חדש</Link></span>
                <span className="flex logout"><Link to="/login" onClick={() => { logout() }}>התנתק</Link></span>
            </div>
        </div>
    )
};

export default AdminDashboard;