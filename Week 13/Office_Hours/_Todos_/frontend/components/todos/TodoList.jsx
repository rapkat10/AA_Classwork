import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        // const { todos, createTodo } = this.props;
        const todos = this.props.todos;
        const createTodo = this.props.createTodo;
        const updateTodo = this.props.updateTodo;
        const deleteTodo = this.props.deleteTodo;
        
        const todoListItems = todos.map(todo => {
            return (
                < TodoListItem key={todo.id}
                    todo={todo} 
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo} 
                 />
            );
        });

        return (
            <>
                <ul><li> Hello {todoListItems}</li></ul>
                <TodoForm createTodo={createTodo} />
            </>
        );
    }

};

export default TodoList;