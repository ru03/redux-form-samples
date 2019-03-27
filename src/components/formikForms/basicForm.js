import React from 'react';
import { Field, ErrorMessage } from 'formik';
import CustomError from '../UI/CustomError/CustomError';
import Input from '../UI/Formik/Input/Input';
import 'bulma';

function validateName(value) {
    let error;
    if (value.length < 3) {
        error = 'Minimo 3 caracteres';
    }

    if (!value) {
        error = 'Requerido!';
    }
    return error;
}

function validateAge(value) {
    let error;
    if (value < 18) {
        error = 'You must be greater than 18 ages';
    }

    if (value > 65) {
        error = 'You are too old, sorry';
    }

    if (!value) {
        error = 'Requerido!';
    }

    return error;
}

const basicForm = ({ handleChange, handleBlur, handleSubmit, values }) => (
    <form onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <Field
                    name="name"
                    type="text"
                    component={Input}
                />
            </div>
            <ErrorMessage
                name="name"
                component={CustomError} />
        </div>
        <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                />
            </div>
        </div>
        <div className="field">
            <label className="label">Age</label>
            <div className="control">
            <Field
                    name="age"
                    type="number"
                    component={Input}
                />
            </div>
            <ErrorMessage
                name="age"
                component={CustomError} />
        </div>

        <button type="submit">Submit</button>
    </form >
)

export default basicForm;