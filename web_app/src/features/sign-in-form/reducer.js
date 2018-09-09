import { handleActions } from 'redux-actions';
import { setSignInParams } from "./actions";

export const signInForm = handleActions({
   [setSignInParams.toString()] : (state, action) => {
       return {
           ...state,
           ...action.payload
       }
   },
}, {
    name : null,
    email : null,
});