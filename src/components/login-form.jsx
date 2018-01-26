import React from 'react';
import {Field, reduxForm} from 'redux-form';

const formName = Some => ({name = 'unique', ...rest}) => (
    <Some form={name} {...rest} />
);

export const LoginForm = formName(reduxForm()(({
    handleSubmit,
    onLogout
}) => (
    <form onSubmit={handleSubmit}>
        <label>Login:</label><br />
        <Field name="login" component="input" type="text" /><br />
        <label>Password:</label><br />
        <Field name="password" component="input" type="password" /><br />
        <button type="submit">login</button>
        <button type="button" onClick={onLogout}>logout</button><br />
    </form>
)));
