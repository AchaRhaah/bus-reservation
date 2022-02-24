import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeatPlan from './SeatPlan';
import Agencies from './Agencies';
import HomePage from './HomePage';
import Register from './Register/Register';
import Login from './Register/Login';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/SeatPlan" element={<SeatPlan />} />
        <Route exact path="/Agencies" element={<Agencies />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    // <div>ma</div>
  );
}

export default App;
