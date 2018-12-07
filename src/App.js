import React, { Component } from 'react';
import {Route ,Redirect, Switch} from 'react-router-dom';
import Index from './pages/Home/index.jsx';
import List from './pages/List/List.jsx';
import Car from './pages/Car/Car.jsx';
import User from './pages/User/User.jsx';
import Detail from './pages/List/Detail.jsx';
import Listcar from './pages/List/Listcar.jsx';

// import QueueAnim from 'rc-queue-anim';//切换动画
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/home/' component={Index} />
            <Route path='/list/' component={List} />
            <Route path='/listcar/' component={Listcar} />
            <Route path='/car/' component={Car} />
            <Route path='/my/' component={User} />
            <Route path='/detail/' component={Detail} />
            <Redirect exact from='/' to='/home' />
        </Switch>
      </div>
    );
  }
}

export default App;
