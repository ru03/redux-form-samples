import React from 'react';
import 'bulma';
const CustomError = ({ children }) => (
    <p className="help is-danger">
        {children}
    </p>
)


export default CustomError;