import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserPosts from "./Components/UserPosts/UserPosts";
import Users from "./Components/Users/Users";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/:userId" component={UserPosts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
