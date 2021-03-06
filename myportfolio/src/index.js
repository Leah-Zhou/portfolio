import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import About from './components/about';
import Work from './components/work';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Teashop from './components/bubbletea';
import GreenP from './components/greenP';
import Watch from './components/watch';
import Survey from './components/survey';
import ScrollToTop from './components/toTop';
import SwitchComponent from './components/switch';


function Page() {
  return (
  <div className="main-container">
    <Router>
     <Nav />
      <ScrollToTop />
      <SwitchComponent />
      {/* <Switch>
      <Route path="/" exact component={Work} />
      <Route path="/about"  component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/teashop project" component={Teashop} />
      <Route path="/greenp project" component={GreenP} />
      <Route path="/watch" component={Watch} />
      <Route path="/web survey project" component={Survey} />

      {/* <Route path="/contact" component={Contact} /> */}
      {/* </Switch> */} */}
    </Router>

  </div> )
}

ReactDOM.render(<Page />, document.getElementById('root'));

reportWebVitals();
