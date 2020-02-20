import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    render() {
        const { todos, receiveTodo } = this.props;
        const todoItems = todos.map(todo => {
            return (
                <TodoListItem key={ todo.id } todo={ todo } />
            );
        });

        return (
            <div>
                <ul>{ todoItems }</ul>
                <TodoForm receiveTodo={receiveTodo} />
            </div>
        );
    }

};

export default TodoList;