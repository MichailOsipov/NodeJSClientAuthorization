import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {Authentication} from './authentication';

ReactDOM.render(
    <Provider store={store}>
        <Authentication />
    </Provider>,
    document.getElementById('root')
);
