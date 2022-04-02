import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Form from './Form'
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Header from './Header';

function App() {
  return (
      <div className="login">
        <div className="container">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Form />} />
              <Route path="/newevent" element={<Form />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
