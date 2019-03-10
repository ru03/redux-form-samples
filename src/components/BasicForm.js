import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './UI/Input/Input';
import FormButtons from './UI/FormButtons/FormButtons';

const maxLength = (value) => value && value.length > 15 ? 'Error maxlength' : undefined;
const required = (value) => value ? undefined : 'Required';
const BasicForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, valid } = props;
    return (
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={handleSubmit}>
                    {/* <label>Name</label> */}
                    {/* <Field  name="name"
                    component="input"
                    type="text"
                    validate={maxLength}
            /> */}
                    {/* <label>Last Name</label>
            <Field name="lastName"
                component="input"
                type="text"
            /> */}
                    <Field name="name" label="Nombre" component={Input} type="text" validate={[maxLength, required]} />
                    <Field name="lastName" label="Apellido" component={Input} type="text" validate={maxLength} />
                    <FormButtons submittingHandle={submitting} reset={() => reset()} />
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'basicForm'
})(BasicForm);
