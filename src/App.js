import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
      <Router>
      <div>
        <header>
          <Navbar/>
        </header>
        <main>
          <React.Suspense fallback="Loading...">
            <Switch>
              <Route exact path="/" component= {TexasFresh}></Route>
              <Route exact path="/social-code" component= {SocialCode}></Route>
              <Route exact path="/travel-blog" component= {TravelBlog}></Route>
              <Route exact path="/coffee-project" component={CoffeeProject}></Route>
              <Route exact path="/weathermap" component={Weathermap}></Route>
              <Route  exact path="/react-patterns" component= {ReactPatterns}></Route>
              <Route exact path="/dadlister" component= {Dadlister}></Route>
            </Switch>
          </React.Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      </Router>
    </div>
  );
}

export default App;

