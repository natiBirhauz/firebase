import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Dashboard() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    if (!user)
        navigate('/');
    return (
        <div><h1>האזור האישי</h1></div>
    )
};

export default Dashboard;