import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './UI/Input/Input';
import FormButtons from './UI/FormButtons/FormButtons';

const AsyncValidationForm = ({ handleSubmit, reset , error, submitHandle}) => {
    console.log(error);
    return (
    <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <form onSubmit={handleSubmit(submitHandle)}>
                <Field name="username" label="Username" component={Input} type="text" />
                <Field name="password" label="Password" component={Input} type="password" />
                { error && <p className="help is-danger">{error}</p>}
                <FormButtons submittingHandle={false} reset={() => reset()} />
            </form>
        </div>
    </div>
)};

export default reduxForm({
    form: 'login',
})(AsyncValidationForm);