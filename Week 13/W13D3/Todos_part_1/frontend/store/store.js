import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// import { reveiveTodo } from '../actions/todo_actions';
// import { reveiveTodos } from '../actions/todo_actions';

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;