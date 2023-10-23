import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TournamentList from './components/TournamentList';
import Tournament from './components/Tournament';
import './App.css'
import PersonalAccount from './components/personal';
import SignUp from './components/signup';
import SignIn from './components/signin';
import vdv from './assets/vdv.mp4'
function App() {
  return (
    <div className="App">
      <div className='overlay'><video src={vdv} autoPlay   muted/>
      <div className='container'>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/personal" component={PersonalAccount} />
        <Route path="/TournamentList" component={TournamentList} />
        <Route path="/Tournament" component={Tournament} />
        <Route path="/signup" component={SignUp} />
      </Switch>
        
        </div>
      </div>
    </div>
  );
}

export default App;