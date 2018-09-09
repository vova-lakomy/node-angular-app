import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/App';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

import { store } from "./store";

render((
    <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>
), document.getElementById('root'));

