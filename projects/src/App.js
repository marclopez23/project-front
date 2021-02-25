import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home/Home";
import Project from "./views/Project/Project";
import Task from "./views/Task/Task";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/task/:taskId">
          <Task />
        </Route>
        <Route exact path="/project/:projectId">
          <Project />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
