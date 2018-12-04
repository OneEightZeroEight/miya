import React, { Component } from 'react';
import {Route ,Redirect, Switch} from 'react-router-dom';
import Index from './pages/Home/index.jsx';
import List from './pages/List/List.jsx';
import Car from './pages/Car/Car.jsx';
import User from './pages/User/User.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home/' component={Index} />
          <Route path='/list/' component={List} />
          
          <Route path='/car/' component={Car} />
          <Route path='/my/' component={User} />
          <Redirect exact from='/' to='/home' />
        </Switch>
      </div>
    );
  }
}

export default App;
