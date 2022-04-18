import { logout } from './firebase';
import { Link } from 'react-router-dom';
import './App.css';

function Dashboard() {

    return (
        <div><h1>האזור האישי</h1>
            <h2>ברוכים הבאים</h2>
            <div className="container2">
                <span className="flex"><Link to="/profile">פרופיל</Link></span>
                <span className="flex"><Link to="/newevent">יצירת אירוע חדש</Link></span>
                <span className="flex"><Link to="/newdelivery">יצירת משלוח חדש</Link></span>
                <span className="flex"><Link to="/users">עריכת מתנדבים</Link></span>
                <span className="flex"><Link to="/newevent">עריכת מוטבים</Link></span>
                <span className="flex"><Link to="/events">אירועים קרובים</Link></span>
                <span className="flex"><Link to="/register">יצירת משתמש חדש</Link></span>
                <span className="flex logout"><Link to="/" onClick={() => {logout()}}>התנתק</Link></span>
            </div>
        </div>
    )
};

export default Dashboard;