import React from 'react';
import 'bulma';

const Checkbox = ({ input, label, meta: { touched, error } }) => (
    <div className="field">
        <label className="checkbox">
            <input {...input} type="checkbox" />
            {` ${label}`}
        </label>
    </div>
)

export default Checkbox;
