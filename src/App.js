import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/assets/navbar";
import AllCats from "./components/pages/allCats";
import LikesCats from "./components/pages/likesCats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={AllCats} />

        <Route path="/likesCats" component={LikesCats} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
