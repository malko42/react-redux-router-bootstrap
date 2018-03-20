import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Link } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";

const target = document.getElementById("root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
