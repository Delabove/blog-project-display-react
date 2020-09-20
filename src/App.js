import React from 'react';
import backgroundImage from './styling/background.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <backgroundImage />

        <Navbar />
        <Main />
        <Layout />


        <Footer />



    </div>
  );
}

export default App;
