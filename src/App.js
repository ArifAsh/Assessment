import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import React from "react"
import Main from "./Views/main"


function App() {
  return (
    <Router>
      <Switch>
      <div>
        <Route path="/"exact><Main /></Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
