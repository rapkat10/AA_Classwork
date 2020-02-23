import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", body: "", done: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(key) {
        return e => this.setState({ [key]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(
            () => this.setState({ title: '', body: '' })
        );
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>Title
                    <input
                        value={ this.state.title }
                        onChange={ this.update('title') }/>
                </label>

                <label>Body
                    <textarea
                        value={ this.state.body }
                        onChange={ this.update('body') }>
                    </textarea>
                </label>
                
                <button>Create New Todo</button>
            </form>
        );
    }
};

export default TodoForm;
