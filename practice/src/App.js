import React from 'react';
import {ScoreBoard} from './components/ScoreBoard';
import {Route} from 'react-router-dom';
import './App.css';
import {NavMenu} from './components/NavMenu';



function App() {
  return (
    <div className="App">
     <NavMenu />
     <Route path = '/score' component = {ScoreBoard} />
     
    </div>
  );
}

export default App;
