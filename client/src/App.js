import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp/HomeComp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeComp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
