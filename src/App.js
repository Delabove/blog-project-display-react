import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import backgroundImage from './styling/background.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Main from './components/Main';
import TexasFresh from './components/TexasFresh';
import SocialCode from './components/SocialCode';


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
              <Route path="/texasFresh">
                <TexasFresh/>
              </Route>
              <Route path="/socialCode">
              <SocialCode />
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


// <Navbar />
// <Main />
// <Layout>
//   <TexasFresh />
// </Layout>



// <Footer />



  // {/* <div className="layout" xs={12} md={6}>
  //               <ul className="layout-list">
  //                   <li className="description">
  //                   <h2>Description </h2>
  //                       <div>{desc}</div>
  //                   </li>
  //                   <li className="design">
  //                   <h1>Design</h1>
  //                   <p>{des}</p>
  //                   <p>{img}</p>
  //                   <p>{des2}</p>
  //                   </li>
  //                   <li className="technologies">
  //                   <h2>Technologies</h2>
  //                   <p>{tech}</p>
  //                   </li>
  //                   <li className="learns">
  //                   <h2>Learns</h2>
  //                   <div> {learn}</div>
  //                   </li>
  //               </ul>
  //           </div> */}