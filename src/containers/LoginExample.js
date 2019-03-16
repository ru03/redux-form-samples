import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form'
import AsyncValidationForm from './../components/AsyncValidationForm';
class LoginExample extends Component {

    state = {};

    loginHandle = () => {
        const { login } = this.props;
        const loginData = { user: { ...login.values } }
        console.log(loginData)
        return fetch('http://localhost:8080/users/', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(succeed => {
                const body = succeed.json();
                if(succeed.status !== 200) {
                    return body.then(err => {throw new SubmissionError(err)});
                } else {
                    return body;
                }
            })
            .then(res => alert(JSON.stringify(res)));
    }

    render() {

        return (
            <div>
                <h1 className="title has-text-centered is-1">LOGIN EXAMPLE</h1>
                <AsyncValidationForm submitHandle={this.loginHandle} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.form.login,
});

export default connect(mapStateToProps)(LoginExample);
