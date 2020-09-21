import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <BrowserRouter>
      <div>
        <header>
          <Navbar/>
        </header>
        <main>
          <React.Suspense fallback="Loading...">
            <Switch>
              <Route path="/">
                <TexasFresh/>
              </Route>
              <Route path="/social-code">
              <SocialCode />
              </Route>
              <Route path="/travel-blog">
              <TravelBlog />
              </Route>
              <Route path="/coffee-project">
              <CoffeeProject />
              </Route>
              <Route path="/weathermap">
              <Weathermap />
              </Route>
              <Route path="/react-patterns">
              <ReactPatterns />
              </Route>
              <Route path="/dadlister">
              <Dadlister />
              </Route>
            </Switch>
          </React.Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

