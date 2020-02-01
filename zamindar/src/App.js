import React from 'react';
import back from './assets/images/landing3.jpeg';
import './css/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img src={back} alt="ypl"></img>
      <nav>
        <p>aadha zamindar</p>
        <p className="right">sublease your place</p>
      </nav>
      <div className="content">
        <h1 id="hello">Say Hello</h1>
        <h1>To your new home</h1>
        <Router>
          <Link to="/buy" className="buy">Get Shifting</Link>
          <Switch>
            <Route path = "/buy">
              <Buy/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

function Buy() {
  return <h2>Bought</h2>
}
export default App;
