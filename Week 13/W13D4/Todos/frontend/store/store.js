import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import logger from 'redux-logger';

// import { reveiveTodo } from '../actions/todo_actions';
// import { reveiveTodos } from '../actions/todo_actions';

let preloadedState = {};
const configureStore = () => {
    // return createStore(rootReducer);
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger));
}

export default configureStore;