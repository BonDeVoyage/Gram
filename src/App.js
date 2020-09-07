import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from "./component/Register";
import Login from "./component/Login";
import LeftPanel from "./component/LeftPanel";
import Main from "./component/Main";

function App() {
  return (
    <div className="App container-fluid h-100 p-0">
        <Router>
            <Switch>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/" component={Main}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
