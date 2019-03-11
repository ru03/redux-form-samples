import React from 'react';
import { Field, FormSection, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import Input from './UI/Input/Input';
import Checkbox from './UI/Checkbox/Checkbox';
import FormButtons from './UI/FormButtons/FormButtons'
import { syncValidators } from './../helpers/formValidation';

const SyncValidationForm = (props) => {
    const { checkOpts, handleSubmit, reset, submitting, pristine, hasHobbie } = props;
    console.log(hasHobbie)
    return (
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={handleSubmit}>
                    <Field name="email" label="Email" component={Input} type="email" />
                    <Field name="name" label="Name" component={Input} type="text" />
                    <Field name="age" label="Age" component={Input} type="text" />
                    <div className="field">
                        <Field id='hasHobbies'
                            name="hasHobbie"
                            label="Has hobbies?"
                            type="checkbox"
                            component={Checkbox}
                        />
                    </div>
                    {
                        hasHobbie && <FormSection name="hobbies">
                            <div className="field is-grouped is-grouped-centered">
                                {
                                    checkOpts.map((data, i) =>
                                        <Field id={data}
                                            key={data}
                                            name={data}
                                            label={data}
                                            type="checkbox"
                                            component={Checkbox}
                                        />
                                    )
                                }
                            </div>
                        </FormSection>
                    }
                    <FormButtons pristine={pristine} submittingHandle={submitting} reset={() => reset()} />
                </form>
            </div>
        </div>
    )
}

const selector = formValueSelector('SyncValidationForm');
const mapStateToProps = state => ({
    hasHobbie: selector(state, 'hasHobbie'),
});

const syncValidationForm = reduxForm({
    form: 'SyncValidationForm',
    validate: syncValidators,
})(SyncValidationForm);

export default connect(mapStateToProps)(syncValidationForm);
