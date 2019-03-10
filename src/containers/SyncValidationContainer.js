import React, { Component } from 'react';
import { connect } from 'react-redux';
import SyncValidationForm from './../components/SyncValidationForm';
import Code from './../components/Code/Code';

class SyncValidationContainer extends Component {

    state = {
        hobbies: ['sports', 'books', 'tv', 'technology', 'motor', 'travel'],
    };

    handleSubmit = (values) => {
        console.log('[SyncValidation Values]', values);
    }

    render() {
        const { hobbies } = this.state;
        const { form } = this.props;
        return (
            <div>
                <h1 className="title has-text-centered">Sync Validation Form</h1>
                <br />
                <SyncValidationForm checkOpts={hobbies} onSubmit={this.handleSubmit} />
                <br />
                <div className="column is-half is-offset-one-quarter">
                    <Code value={form && JSON.stringify(form.values, undefined, 2)} />
                </div>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    form: state.form.SyncValidationForm,
})
export default connect(mapStateToProps)(SyncValidationContainer);
