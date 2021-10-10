import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Details from "./components/Details";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
