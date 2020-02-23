import { 
    RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO
} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodos = {};
            action.todos.forEach(todo => {
                newTodos[todo.id] = todo
            })
            return newTodos;
        case RECEIVE_TODO:
            const newTodo = action.todo;
            return Object.assign({}, state, {
                [newTodo.id]: newTodo
            });
        case REMOVE_TODO:
            nextState = Object.assign({}, state);
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }
};

export default todosReducer;


