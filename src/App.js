import logo from "./logo.svg";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
//import { DefaultLayout } from "./components/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
        <Route path="/dashboard" component={DefaultLayout} />
        </Switch>
        {/* <DefaultLayout /> */}
      </div>
    </Router>
  );
}

export default App;
