import './index.css';
import App from './App';

import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom"

function HelloWorldApp() {
    // YOUR CODE GOES HERE
    return (<React.StrictMode>
      <HashRouter>
        <App/>
      </HashRouter>
    </React.StrictMode>);

  /*return (<React.StrictMode>
    <App/>
  </React.StrictMode>);*/
}

initializeBlock(() => <HelloWorldApp />);
