import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import TournamentList from './components/TournamentList';
import Tournament from './components/Tournament';
import './App.css'
import PersonalAccount from './components/personal';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/personal" component={PersonalAccount} />
        <Route path="/TournamentList" component={TournamentList} />
        <Route path="/Tournament" component={Tournament} />
      </Switch>
    </div>
  );
}

export default App;