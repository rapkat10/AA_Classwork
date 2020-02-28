import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user);
    }

    handleLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user);
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    errors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { formType } = this.props;
        let formtype;
        let linkTo;
        let handlefunc;
        if (formType === "signup") {
            formtype = 'Sign Up!';
            linkTo = <Link to="/login">Log In</Link>;
            handlefunc = this.handleSignup;
        } else {
            formtype = 'Log In!';
            linkTo = <Link to="/signup">Sign Up</Link>;
            handlefunc = this.handleLogin; 
        }

        return (
            <div>
                <h2>{formtype}</h2>
                {linkTo}
                <form>
                    {this.errors()}
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={handlefunc}>{formtype}</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default SessionForm;
