import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Home from "../screen/home";

export default function BasicRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}
