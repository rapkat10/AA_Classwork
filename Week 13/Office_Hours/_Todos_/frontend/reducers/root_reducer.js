import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';

// const rootReducer = (state = {}, action) => {
//   // debugger;
//   return {
//     todos: todosReducer(state.todos, action)
//   };
// };

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;