import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserPosts from "./Components/UserPosts/UserPosts";
import PostComments from "./Components/PostComments/PostComments";
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
            <Route exact path="/:userId/:postId" component={PostComments} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
