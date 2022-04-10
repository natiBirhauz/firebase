import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NewEvent from './NewEvent'
import NewDelivery from './NewDelivery'
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Header from './Header';
import Dashboard from './Dashboard';

function App() {
  return (
      <div className="login">
        <div className="container">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/newevent" element={<NewEvent />} />
              <Route path="/newdelivery" element={<NewDelivery />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
