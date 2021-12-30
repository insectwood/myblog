import React from "react";
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import store, {history} from "./store";
import MyblogRouter from "./routes/Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/custom.scss";

const App = () => {
  return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MyblogRouter/>
        </ConnectedRouter>
      </Provider>
  );
};

export default App;
