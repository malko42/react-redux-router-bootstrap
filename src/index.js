// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./app";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";

// import './index.css'

const target = document.getElementById("root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
