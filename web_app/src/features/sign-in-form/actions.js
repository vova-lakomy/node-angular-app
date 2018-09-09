import { createAction } from 'redux-actions'

export const signIn = createAction(
    'SIGN_IN', (options)=> {
    return options;
});

export const setSignInParams = createAction(
    'SET_SING_IN_PARAMS', (options)=> {
        return options;
    });