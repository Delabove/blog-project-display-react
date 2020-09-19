import React from 'react';
import backgroundImage from './styling/background.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <backgroundImage />

        <Navbar />

        <Layout />


        <Footer />



    </div>
  );
}

export default App;
