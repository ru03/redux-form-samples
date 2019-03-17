import React from 'react';
import * as classes from './Spinner.module.css'

const Spinner = (props) => (
    <div className={classes.spinner}>
        <div className={classes.dot1}></div>
        <div className={classes.dot2}></div>
    </div>
);

export default Spinner;
