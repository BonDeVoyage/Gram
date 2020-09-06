import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from "./component/Footer";
import Register from "./component/Register";
import Login from "./component/Login";
import LeftPanel from "./component/LeftPanel";
import ButtonAppBar from "./component/Header";
import Main from "./component/Main";
import "./App.css"
function App() {
  return (
    <div className="App  h-100">
        <Router>
          <ButtonAppBar/>
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
