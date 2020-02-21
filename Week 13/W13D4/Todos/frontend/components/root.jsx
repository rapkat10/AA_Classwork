import React from 'react';
import { Provider } from 'react-redux';

import App from './app'
// import BleatForm from './bleat_form_container';
// import BleatIndex from './bleat_index_container';

const Root = ({ store }) => {
    return <Provider store={store}>
        <App />
    </Provider>;
};

export default Root;