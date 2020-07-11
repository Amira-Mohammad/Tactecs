import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import TargetMarket from './components/Target Market/TargetMarket';
import Activities from './components/Activities/Activities';
import CommunityServices from './components/Community Services/CommunityServices';
import PhilosophyValues from './components/PhilosophyValues/PhilosophyValues';

import Footer from './components/Footer/Footer'

import logo from '../src/images/logo.png';
import linkedIn from '../src/images/linkedin.png';
import faceBook from '../src/images/facebook.png';
import twitter from '../src/images/twitter.png'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column h-100">
        <div className="header px-2 d-flex justify-content-between border-bottom shadow">
          <div className="d-flex px-3">
            <img className="pr-1" src={logo} height="40" />
            <div className="d-flex flex-column">
              <div className="font-weight-bold titleColor">TACTECS</div>
              <div className="font_12 subTitleColor">Technical Assisstant Consultants</div>

            </div>
          </div>
          <nav className="pt-2">
            <ul className="list-unstyled d-flex px-3">
              <li className="px-3">
                <Link to="/">Home</Link>
              </li>

              <li className="px-3">
                <Link to="/mission">Mission & Vision</Link>
              </li>

              <li className="px-3">
                <Link to="/PhilosophyValues">Philosophy and Values</Link>
              </li>
              <li className="px-3">
                <Link to="/targetmarket">Target Market</Link>
              </li>
              <li className="px-3">
                <Link to="/activities">Activities</Link>
              </li>
              <li className="px-3">
                <Link to="/communityservices">Social Responsibilities</Link>
              </li>


            </ul>
          </nav>

        </div>
        <div className="flex-fill content">


          <Switch>

            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/mission">
              <Mission />
            </Route>

            <Route path="/targetmarket">
              <TargetMarket />
            </Route>

            <Route path="/activities">
              <Activities />
            </Route> 


            <Route path="/communityservices">
              <CommunityServices />
            </Route>

            <Route path="/PhilosophyValues">
              <PhilosophyValues />
            </Route>

          </Switch>



        </div>
        <div className="footer p-2 bg_grey">
          <div className="d-flex justify-content-between">
            <div>  </div>
            <div>
              <div>
                Follow Us:
            </div>
              <div>
                <a href="https://www.linkedin.com/company/tactecs/"><img className="px-1" src={linkedIn} /></a>
                <img className="px-1" src={faceBook} />
                <img className="px-1" src={twitter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
