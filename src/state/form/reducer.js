import * as actions from './../actionTypes';

const initialState = {
    data: {
        name: '',
        lastName: '',
        age: null
    },
    loading: false,
    errors: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FORM_REQUESTED:
            return ({
                ...state,
                loading: true,
            });
        case actions.FORM_SUCCESS:
            return ({
                ...state,
                data: { ...action.formData },
                loading: false,
                error: false,
            });
        case actions.FORM_FAIL:
            return ({
                ...state,
                loading: false,
                errors: true,
            });
        case actions.FORM_ERRORS:
            return ({
                ...state,
                loading: false,
                errors: { ...action.errors }
            });
        default: return state;
    }
}

export default reducer;