import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import { members } from "./components/pages/Members";
import Customer from "./components/pages/customer";
import Company from "./components/pages/company";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/customer/:id">
            <Customer />
          </Route>
          <Route path="/company/:id">
            <Company />
          </Route>
          <Route path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
