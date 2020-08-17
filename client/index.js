import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import history from "./history";
import {BrowserRouter as Router} from 'react-router-dom';

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
