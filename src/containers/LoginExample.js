import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import AsyncValidationForm from './../components/AsyncValidationForm';
import Spinner from './../components/UI/Spinner/Spinner';

class LoginExample extends Component {

    state = {
        loading: false,
    };

    loginHandle = () => {
        const { login } = this.props;
        const loginData = { user: { ...login.values } }
        console.log(loginData)
        this.setState({ loading: true });

        return fetch('http://localhost:8080/users/', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(succeed => {
                const body = succeed.json();
                if (!succeed.ok) {
                    return body.then(err => {
                        this.setState({ loading: false });
                        throw new SubmissionError(err)
                    });
                } else {
                    return body;
                }
            })
            .then(res => {
                this.setState({ loading: false });
                alert(JSON.stringify(res))
            });
    }

    render() {
        const { loading } = this.state;
        const spinner = loading ? <Spinner /> : null;

        return (
            <div>
                <h1 className="title has-text-centered is-1">LOGIN EXAMPLE</h1>
                <AsyncValidationForm submitHandle={this.loginHandle} />
                {spinner}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.form.login,
});

export default connect(mapStateToProps)(LoginExample);
