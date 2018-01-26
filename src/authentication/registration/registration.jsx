import React from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {register} from 'api/register';
import {REGISTER_FORM_NAME} from './constants';

@reduxForm({
    form: REGISTER_FORM_NAME
})
export class Registration extends React.Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    registerUser = (data) => {
        register(data).then(console.log);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.registerUser)}>
                User registration:<br />
                <label>Login:</label><br />
                <Field name="login" component="input" type="text" /><br />
                <label>Password:</label><br />
                <Field name="password" component="input" type="password" /><br />
                <button type="submit">Register</button>
            </form>
        );
    }
}
