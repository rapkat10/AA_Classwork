import { connect } from 'react-redux';
import TodoList from './TodoList';

import * as Actions from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // receiveTodo: todo => dispatch(Actions.receiveTodo(todo)),
        // receiveTodos: todos => dispatch(Actions.receiveTodos(todos)),
        fetchTodos: () => dispatch(Actions.fetchTodos()),
        createTodo: (todo) => dispatch(Actions.createTodo(todo)),
        updateTodo: (todo) => dispatch(Actions.updateTodo(todo)),
        deleteTodo: (todo) => dispatch(Actions.deleteTodo(todo))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

