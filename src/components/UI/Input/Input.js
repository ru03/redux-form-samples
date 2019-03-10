import React from 'react';
import 'bulma';
const Input = ({ input, type, label, meta: { touched, error } }) => {
    let classes = ['input'];
    error && touched && classes.push('is-danger');
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input {...input} className={classes.join(' ')} type={type} />
            </div>
            {touched && error && <p className="help is-danger">{error}</p>}
        </div>
    )
}

export default Input;