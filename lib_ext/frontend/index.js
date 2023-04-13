import './index.css';
import App from './App';
import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldApp() {
    // YOUR CODE GOES HERE
    return <React.StrictMode>
      <App />
    </React.StrictMode>;
}

initializeBlock(() => <HelloWorldApp />);
