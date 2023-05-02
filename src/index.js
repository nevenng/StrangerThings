import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootEl = document.getElementById('app');
const root = ReactDOMClient.createRoot(rootEl);
root.render(
<Router>
<App />
</Router>
);