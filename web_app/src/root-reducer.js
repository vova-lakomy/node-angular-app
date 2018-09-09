import { combineReducers } from "redux";
import { signInForm } from "./features/sign-in-form/reducer";

export const rootReducer = combineReducers({
    signInForm
});