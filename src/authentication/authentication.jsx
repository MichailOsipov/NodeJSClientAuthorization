import React from 'react';
import {Registration} from './registration';
import {PassportJSAuthentication} from './passportjs-authentication';

export const Authentication = () => (
    <div>
        <Registration />
        <PassportJSAuthentication />
    </div>
);
