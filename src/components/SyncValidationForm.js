import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Input from './UI/Input/Input';
import FormButtons from './UI/FormButtons/FormButtons'
import { syncValidators } from './../helpers/formValidation';

const SyncValidationForm = (props) => {
    const { handleSubmit, reset, submitting } = props;
    return (
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={handleSubmit}>
                    <Field name="email" label="Email" component={Input} type="email" />
                    <Field name="name" label="Name" component={Input} type="text" />
                    <FormButtons submittingHandle={submitting} onResetHandle={reset} />
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'SyncValidationForm',
    validate: syncValidators,
})(SyncValidationForm);
