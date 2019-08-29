import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style'
import App from './App';
import { Iconfontstyle } from './statics/iconfont/iconfont'
ReactDOM.render((
    <div>
        <Iconfontstyle />
        <Globalstyle />
        <App />
    </div>
), document.getElementById('root'));

