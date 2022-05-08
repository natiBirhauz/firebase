import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NewEvent from "./NewEvent"
import NewDelivery from "./NewDelivery"
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Header from "./Header";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import Profile from "./Profile"
import Users from "./Users"
import Events from "./Events";
import "./App.css";

function App() {
  return (
    <div className="login">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/newevent" element={<NewEvent />} />
            <Route path="/newdelivery" element={<NewDelivery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/users" element={<Users />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;