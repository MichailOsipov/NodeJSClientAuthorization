import React from 'react';
import {passportjsLogin, createUser, createClient, getTokens} from 'api/passportjs';
import {LoginForm} from 'components/login-form';
import {Content} from 'components/content';
import {PASSPORTJS_FORM_NAME} from './constants';

export class PassportJSAuthentication extends React.Component {
    login = (values) => {
        passportjsLogin(values).then((data) => { console.log(data); });
    }

    logout = () => {
        console.log('logout');
    }

    createUser = () => {
        createUser();
    }

    createClient = () => {
        createClient();
    }

    getTokens = () => {
        getTokens();
    }

    render() {
        return (
            <div>
                <LoginForm
                    name={PASSPORTJS_FORM_NAME}
                    onSubmit={this.login}
                    onLogout={this.logout}
                />
                <Content />
                <button onClick={this.createUser}>Добавить пользователя</button>
                <button onClick={this.createClient}>Добавить клиент</button>
                <button onClick={this.getTokens}>Получить токены</button>
            </div>
        );
    }
}
