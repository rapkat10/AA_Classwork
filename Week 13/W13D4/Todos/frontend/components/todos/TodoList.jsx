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
        const { todos, createTodo } = this.props;
        const todoItems = todos.map(todo => {
            return (
                <TodoListItem key={ todo.id } todo={ todo } />
            );
        });

        return (
            <div>
                <ul>{ todoItems }</ul>
                <TodoForm createTodo={createTodo} />
            </div>
        );
    }

};

export default TodoList;