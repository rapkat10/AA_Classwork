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
        fetchTodos: () => dispatch(Actions.fetchTodos()),
        createTodo: todo => dispatch(Actions.createTodo(todo)),
        receiveTodo: todo => dispatch(Actions.receiveTodo(todo)),
        receiveTodos: todos => dispatch(Actions.receiveTodos(todos)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

