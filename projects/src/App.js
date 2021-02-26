import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home/Home";
import Project from "./views/Project/Project";
import Task from "./views/Task/Task";
import Add from "./views/Add/Add";
import Update from "./views/Update/Update";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/update-project/:projectId">
          <Update />
        </Route>
        <Route exact path="/new-project">
          <Add />
        </Route>
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
