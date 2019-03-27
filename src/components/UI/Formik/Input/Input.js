import React from 'react';
import 'bulma';

const Input = ({ field, ...props }) => (
    <input
        className="input"
        name="lastName"
        {...field}
        {...props}
    />
)

export default Input;