// Correct Usage: Only one <Router> at the root level (App.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing'; // Your Landing page
import Join from './pages/join'; // Your Join Test page
import Login from './components/login'; // Your Login page
import Signup from './components/signup'; // Your Signup page
import CreateTest from './components/CreateTest'; // Your Create Test page
import ViewTest from './components/ViewTest'; // Your View Test page
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/dashboard';
const App = () => {
  return (
    
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Login" element={<><LoginPage /><Login /></>} />
        <Route path="/SignUp" element={<><LoginPage /><Signup /></>} />
        <Route path="/Createtest" element={<CreateTest />} />
        <Route path="/Viewtest" element={<ViewTest />} />
      </Routes>
    
  );
};

export default App;
