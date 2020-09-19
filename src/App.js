import React from 'react';
import backgroundImage from './styling/background.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <backgroundImage />
      <main>
        <Navbar />

      </main>

    </div>
  );
}

export default App;
