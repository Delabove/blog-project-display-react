import React from 'react';
import { Switch, Route } from 'react-router-dom'
import backgroundImage from './styling/background.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TexasFresh from './components/TexasFresh';
import SocialCode from './components/SocialCode';
import TravelBlog from './components/TravelBlog';
import CoffeeProject from './components/CoffeeProject';
import Weathermap from './components/Weathermap';
import Dadlister from './components/Dadlister';
import ReactPatterns from './components/ReactPatterns';


function App() {
  return (
    <div className="App">
      <backgroundImage />

      <div>
        <header>
          <Navbar/>
        </header>
        <Switch>
        <main>
            {/* <TexasFresh /> */}
            <Route exact path="/" component={TexasFresh} />
            {/* <SocialCode />
             */}
             <Route exact path="/SocialCode" component={SocialCode} />

            <Dadlister />
            <ReactPatterns />
            <TravelBlog />
            <CoffeeProject />
            <Weathermap />
        </main>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>

    </div>
  );
}

export default App;

