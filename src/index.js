import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Components/Layout.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
