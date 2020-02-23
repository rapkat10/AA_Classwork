import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    toggleTodo(e) {
        e.preventDefault();
        let todoUpdate = this.props.todo;
        todoUpdate.done = !this.props.todo.done;
        this.props.updateTodo(todoUpdate);
    }

    removeTodo(e) {
        e.preventDefault();
        this.props.deleteTodo(this.props.todo);
    }


    render() {
        return (
            <>
                <h2>{this.props.todo.title}</h2>

                <h4>
                    <p> Details</p>
                    <p>{this.props.todo.body}</p>
                    <button onClick={this.removeTodo}>
                        Delete
                    </button>
                </h4>

                <button onClick={ this.toggleTodo }>
                    { this.props.todo.done ? "Undo" : "Done" }
                </button>
            </>
        );
    }
}

export default TodoListItem;
      