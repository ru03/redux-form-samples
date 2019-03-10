import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicForm from '../components/BasicForm';
import Code from '../components/Code/Code';
import 'bulma';
class BasicContainer extends Component {

    state = {};

    handleSubmit = (values) => {
        const { form } = this.props;
        console.log('[FORM]', form)
        console.log(values)
    }

    render() {
        const { form } = this.props;
        console.log(form)
        return (
            <div>
                <h1 className="title has-text-centered">Basic form</h1>
                <br />
                <BasicForm onSubmit={this.handleSubmit} />
                <br />
                <div className="column is-half is-offset-one-quarter">
                    <Code value={form && JSON.stringify(form.values)}/>
                </div>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    form: state.form.basicForm,
});

export default connect(mapStateToProps)(BasicContainer);