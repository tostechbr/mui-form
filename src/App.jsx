import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { Box } from '@mui/material';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState({});

  const handleRegister = (data) => {
    setUserData(data);
    setIsRegistered(true);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Navbar isRegistered={isRegistered} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            {isRegistered && <Route path="/dashboard" element={<Dashboard userData={userData} />} />}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
