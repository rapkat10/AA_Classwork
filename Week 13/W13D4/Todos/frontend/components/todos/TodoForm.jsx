import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(
            () => this.setState({ title: '', body: '' })
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input
                        ref="title"
                        value={this.state.title}
                        placeholder="new title"
                        onChange={this.update('title')}
                        required />
                </label>

                <label>Body
                    <textarea
                        ref="body"
                        value={this.state.body}
                        placeholder="What to do"
                        onChange={this.update('body')}
                        required>
                    </textarea>
                </label>
                
                <button>Create New Todo</button>
            </form>
        );
    }
};

export default TodoForm;
