import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ResultPage from './Components/results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;

