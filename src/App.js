import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollBar from './components/scroll/ScrollBar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path='/gallery'>
            <Gallery/>
          </Route>
        </Switch>
        <Footer/>
        <ScrollBar/>
      </Router>
      
    </div>
  );
}

export default App;
