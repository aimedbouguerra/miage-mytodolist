import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import TaskList from './components/TaskList/TaskList';
import useToken from './useToken';
import MyNavBar from './components/MyNavBar';



function App(props) {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return(
      <div className="wrapper">
        <div><MyNavBar /></div>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard tasks={props.tasks} />
            </Route>
            <Route path="/TaskList">
              <TaskList lists={props.lists}/>
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      
    );
}

export default App;
