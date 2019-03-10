import React from 'react';

const FormButtons = ({ submittingHandle, reset, pristine }) => (
    <div className="field is-grouped is-grouped-centered">
        <p className="control">
            <button className="button is-primary" type="submit" disabled={submittingHandle}>Submit</button>
        </p>
        <p className="control">
            <button className="button is-danger" disabled={pristine || submittingHandle} onClick={reset}>Reset</button>
        </p>
    </div>
)

export default FormButtons;