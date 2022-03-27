import './App.css';
import Form from './Form'
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Form />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
