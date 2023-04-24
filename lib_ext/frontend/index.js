import './index.css';
import App from './App';


import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import {HashRouter} from "react-router-dom"

function HelloWorldApp() {
    return (<React.StrictMode>
      <HashRouter>
        <App/>
      </HashRouter>
    </React.StrictMode>);
}

initializeBlock(() => <HelloWorldApp />);
