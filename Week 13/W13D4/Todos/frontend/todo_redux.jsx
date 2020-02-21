import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import configureStore from './store/store';
window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('main');
    ReactDOM.render(<Root store={ store } />, root);
});



