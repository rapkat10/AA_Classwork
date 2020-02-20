import { connect } from 'react-redux';
import TodoList from './TodoList';

import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: todo => dispatch(receiveTodo(todo)),
        receiveTodos: todos => dispatch(receiveTodos(todos)),
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);