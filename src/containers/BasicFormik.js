import React, { Component } from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import CustomError from '../components/UI/CustomError/CustomError';
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
class BasicFormik extends Component {

    state = {};

    render() {

        return (
            <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, actions) => {
                    console.log('[OnSubmit]', values);
                }}
                render={props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control"></div>
                            <Field
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                name="name"
                                validate={validateName}
                            />
                            <ErrorMessage
                                name="name"
                                component={CustomError} />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        );

    }

}

export default BasicFormik;