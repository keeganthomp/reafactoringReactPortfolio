import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import BaseLayout from "./components/BaseLayout";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfoilio";
import References from "./components/References";
import Home from './components/Home'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>  
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/References" component={References} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
