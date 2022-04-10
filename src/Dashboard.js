import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './App.css';

function Dashboard() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    if (!user)
        navigate('/');
    return (
        <div><h1>האזור האישי</h1>
            <h2>ברוכים הבאים {user.displayName}</h2>
            <div className="container2">
                <span className="flex"><Link to="/profile">פרופיל</Link></span>
                <span className="flex"><Link to="/newevent">יצירת אירוע חדש</Link></span>
                <span className="flex"><Link to="/newdelivery">יצירת משלוח חדש</Link></span>
                <span className="flex"><Link to="/newevent">עריכת מתנדבים</Link></span>
                <span className="flex"><Link to="/newevent">עריכת מוטבים</Link></span>
                <span className="flex"><Link to="/newevent">אירועים קרובים</Link></span>
            </div>
        </div>
    )
};

export default Dashboard;