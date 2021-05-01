import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import "./styles.scss";
import Login from "./components/Login";
import Home from "./components/Home";
import Results from "./components/Results";
import HeroDetails from "./components/HeroDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/search" component={Results} />
        <ProtectedRoute path="/hero/:id" component={HeroDetails} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
