import * as actions from './../actionTypes';

export const formRequested = () => ({
    type: actions.FORM_REQUESTED,
});

export const formSuccess = (formData) => ({
    type: actions.FORM_SUCCESS,
    formData
});
export const formFail = () => ({
    type: actions.FORM_FAIL,
});
export const formErrors = (errors) => ({
    type: actions.FORM_ERRORS,
    errors
});

export const submitForm = (data) => {
    return dispatch => {
        dispatch(formRequested());
        dispatch(formSuccess(data));
    }
}