import logo from "./logo.svg";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NotFound from './pages/404'
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>

      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
