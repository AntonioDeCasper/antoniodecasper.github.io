//@flow
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './context';
import './i18n';

//import CSS styles
import './index.css';

//import COMPONENTS
import {App} from './scenes/';

const root = document.getElementById('app');

if (root !== null) {
  render(
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>,
    root,
  );
}
