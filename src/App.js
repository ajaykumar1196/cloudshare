import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard/>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
