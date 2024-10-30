import React from 'react';
import WelcomeCard from './WelcomeCard'; 
import './App.css';

function App() {
  const studentId = "101469903"; 
  const name = "Kadir Cinar"; 

  return (
    <div className="App">
      <WelcomeCard studentId={studentId} name={name} />
    </div>
  );
}

export default App;
