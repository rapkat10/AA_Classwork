import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li> 
                    <h2>{ this.props.todo.title }</h2>
                    <button>Done</button>
                </li>
            </div>
        );
    }
}

export default TodoListItem;
