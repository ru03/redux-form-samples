import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import basicForm from '../components/formikForms/basicForm';
import { submitForm, formErrors } from './../state/form/actions';
import 'bulma';

function validateName(value) {
    let error = {};
    if (value.name.length < 3) {
        error.name = 'Minimo 3 caracteres';
    }

    if (!value.name) {
        error.name = 'Requerido!';
    }
    return error;
}

function validateAge(value) {
    let error = {};
    if (value.age < 18) {
        error.age = 'You must be greater than 18 ages';
    }

    if (value.age > 65) {
        error.age = 'You are too old, sorry';
    }

    if (!value.age) {
        error.age = 'Requerido!';
    }

    return error;
}

class FormikWithRedux extends Component {

    state = {};

    render() {
        const { submitForm, errorForm } = this.props;
        return (
            <div>
                <h1 className="title has-text-centered is-1">LOGIN EXAMPLE</h1>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Formik
                            initialValues={{ name: '', lastName: '', age: '' }}
                            onSubmit={(values, actions) => {
                                console.log('[OnSubmit]', values);
                                console.log('[OnSubmit]', actions);
                                submitForm(values);
                                actions.resetForm();
                                actions.setSubmitting(false);
                            }}
                            validate={(values) => {
                                console.log(values.age);
                                let errors = {};
                                errors = { ...errors, ...validateName(values) };
                                errors = { ...errors, ...validateAge(values) };
                                console.log('ERRORS', errors);
                                errorForm(errors);
                                return errors;
                            }}
                            component={basicForm}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.formikRedux,
});

const mapDispatchToProps = dispatch => ({
    submitForm: (data) => dispatch(submitForm(data)),
    errorForm: (errors) => dispatch(formErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormikWithRedux);