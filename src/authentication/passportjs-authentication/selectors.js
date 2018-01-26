import {formValueSelector} from 'redux-form';
import {PASSPORTJS_FORM_NAME} from './constants';

const valueSelector = formValueSelector(PASSPORTJS_FORM_NAME);
export const loginFormSelector = state => valueSelector(state, '');
