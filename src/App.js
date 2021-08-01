import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
