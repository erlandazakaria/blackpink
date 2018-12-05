import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Lisa from "./Lisa";
import Rose from "./Rose";
import Jennie from "./Jennie";
import Jisoo from "./Jisoo";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>BLACK<span className="pink">PINK</span></h1>
          <ul className="header">
            <li><NavLink exact to="/">Lisa</NavLink></li>
            <li><NavLink to="/rose">Rose</NavLink></li>
            <li><NavLink to="/jennie">Jennie Kim</NavLink></li>
            <li><NavLink to="/jisoo">Jisoo</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Lisa}/>
            <Route path="/rose" component={Rose}/>
            <Route path="/jennie" component={Jennie}/>
            <Route path="/jisoo" component={Jisoo}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;