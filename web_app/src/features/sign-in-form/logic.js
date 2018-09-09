import { createLogic } from 'redux-logic';
import { signIn } from './actions';

export const signInLogic = createLogic({
    type: signIn,
    async process({ getState, action }, dispatch, done) {

    },
});
