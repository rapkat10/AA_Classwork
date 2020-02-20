import merge from 'lodash/merge';
import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';

// const rootReducer = (state = {}, action) => {
//   // debugger;
//   return {
//     todos: todosReducer(state.todos, action)
//   };
// };

const rootReducer = combineReducers({
  // todo: todosReducer,
  todos: todosReducer
});

export default rootReducer;